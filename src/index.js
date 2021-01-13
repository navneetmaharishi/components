import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetails
                    author="sam"
                    img={Faker.image.avatar()}
                    timeAgo="Today at 6:00PM"
                    comment="Nice blog post!"
                />
            </ApprovalCard >

            <ApprovalCard >
                <CommentDetails
                    author="marry"
                    img={Faker.image.avatar()}
                    timeAgo="Today at 7:00PM"
                    comment="Good blog post!"
                />
            </ApprovalCard >

            <ApprovalCard >
                <CommentDetails
                    author="jen"
                    img={Faker.image.avatar()}
                    timeAgo="Today at 8:00PM"
                    comment="Amazing blog post!"
                />
            </ApprovalCard >
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
