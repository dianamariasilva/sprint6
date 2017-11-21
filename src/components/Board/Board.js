import React from 'react';
import { NavLink } from 'react-router-dom';
import { addComment } from '../../actions';
import { connect } from 'redux-zero/react';

const Board = ({ board2, board }) => {
    const BoardComponent = board.map((item, index) => {
        return <Name
            key={index}
            name={item.name}
        />
    })

    return (
        <main id='main_container'>
            <div>
                <div id='authentication_container' className='application-container'>
                <header className="main-header">
            <nav id="boards_nav">
                <ul>
                    <li>
                        <a href="#"><i className="fa fa-columns"></i><span> Boards</span></a>
                    </li>
                </ul>
            </nav>
            <a href="/"><span className="logo"></span></a>
            <nav className="right">
                <ul>
                    <li>
                        <a className="current-user">
                            <img alt="Gravatar for john@phoenix-trello.com" src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" srcset="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" className="react-gravatar react-gravatar" />
                            <span></span>
                            <span>John Doe</span>
                        </a>
                    </li>
                    <li>
                        <button onClick = {signOut}><i className="fa fa-sign-out"></i><span> Sign out</span></button>
                    </li>
                </ul>
            </nav>
        </header>
                    <div className='main-container'>
                        <div className="view-container boards index">
                            <section>
                                <header class="view-header" >
                                    <h3><i class="fa fa-user"></i><span> My boards</span></h3>
                                </header>
                                <div className="boards-wrapper">
                                    {BoardComponent}
                                    <div className="board add-new">
                                        <div class="inner">
                                            <a id="add_new_board">Add new board...</a>
                                        </div>
                                    </div>
                                    <div className='board form'>
                                        <div className='inner'>
                                            <h4>New board</h4>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
            <div class="view-header">
                <h3><i class="fa fa-users"></i><span> Other boards</span>
                </h3>
            </div>
            <div className='boards-wrapper'>
                {
                    board2.map((list, index) => {
                        return (
                            <div className='board'>
                                <div className='inner'>
                                    <h4>{list.name}</h4>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
                        </div>
                        </div>
                </div>
            </div>
        </main>
    );
};


const Name = ({ name }) => {
    return (
        <div className="board">
            <div className="inner">
                <h4>{name}</h4>
            </div>
        </div>
    );
}

//export default Boards;
const mapToProps = ({ board2, board }) => ({ board2, board });
export default connect(mapToProps)(Board);