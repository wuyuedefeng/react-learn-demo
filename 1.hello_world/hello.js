var Hello = React.createClass({
    render: function(){
        return (
            <div> hell world </div>
        );
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById('main')
);