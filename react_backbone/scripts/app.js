'use strict';

Backbone.Model.prototype.idAttribute = '_id';

var TaskModel = Backbone.Model.extend({
  defaults: {
    id: null,
    name: null,
    priority: null,
    createdAt: new Date().getTime(),
    isComplete: false
  }
});

var TaskCollection = Backbone.Collection.extend({
  url: '/api/tasks',
  model: TaskModel
});

var TaskForm = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <section>
      <h1>Tasks</h1>
      <h2>New</h2>
      <form>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input name="description" id="description" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority" className="form-control">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button className="btn btn-default" type="submit">add task</button>
      </form>
      </section>
      /* jshint ignore:end */
    );
  }
});
var RowItemWrapper = React.createClass({
  render: function () {
    return (
      /* jshint ignore:start */
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.priority}</td>
        <td className="text-right">
          <input type="checkbox" />
        </td>
      </tr>
      /* jshint ignore:end */
    );
  }
});

var TaskList = React.createClass({
  render: function () {
    return (
      /* jshint ignore:start */
      <section>
      <h2>Current</h2>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Priority</th>
          <th className="text-right">Status</th>
        </tr>
        {this.props.results.map(function(result) {
          return <RowItemWrapper key={result['_id']} data={result}/>;
        })}
      </table>
      </section>
      /* jshint ignore:end */
    );
  }
});

var Tasks = React.createClass({
  render: function () {
    return (
      /* jshint ignore:start */
      <section>
        <TaskForm />
        <TaskList results={this.props.results} />
      </section>
      /* jshint ignore:end */
    );
  }
});

var renderCurrentTasks = function (allTasks) {
  var taskExpiration = 604800000;
  var timeNow = new Date().getTime();

  var isTaskExpired = function(task) {
    return ((timeNow - task.createdAt) >= taskExpiration);
  };

  React.render( < Tasks results = {
      allTasks.filter(function(item) {
        return !isTaskExpired(item) && !item.isComplete;
      })
    }
    />, document.getElementById('content'));
}

var tasks = new TaskCollection();
tasks.fetch().then(function(allTasks) {
      renderCurrentTasks(allTasks);
        // var testing = tasks.findWhere({
        //   isComplete: false
        // });
        // console.log(testing);
      });
