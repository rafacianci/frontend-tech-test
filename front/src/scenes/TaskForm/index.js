import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Content,
  Columns,
  Column,
  Label,
  Input,
  Textarea,
  Title,
  Button,
} from 're-bulma';

import { getTask, save, removeTask, clearEdition } from '../../actions/tasks';

import './styles.css';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    };

    if (props.match.params && props.match.params.taskId !== 'new') {
      props.getTask(props.match.params.taskId);
    }
  }

  componentWillReceiveProps(props) {
    if (props.task && !this.state.form.id) {
      this.setState({
        form: props.task,
      });
    }
  }

  componentWillUnmount() {
    this.props.clearEdition();
  }

  deleteTask = id => () => {
    this.props.history.push('/tasks');
    removeTask(id)
  }

  handleChange(input, value) {
    this.setState({
      form: {
        ...this.state.form,
        [input]: value,
      },
    });
  }

  handleSubmit(event)  {
    event.preventDefault();
    save(this.state.form);
    this.props.history.push('/tasks');
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <Content>
          <Title size="is1">
            {(this.props.task && this.props.task.id) ? `Task #${this.props.task.id}` : 'New Task'}
          </Title>
          <Columns>
            <Column size="is4">
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                type="text"
                value={this.state.form.title}
                required
                onChange={(event) => this.handleChange('title', event.target.value)}
              />
            </Column>
            <Column size="is4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                value={this.state.form.description}
                required
                onChange={(event) => this.handleChange('description', event.target.value)}
              ></Textarea>
            </Column>
            <Column size="is12">
              <Button className="cancelButton">
                <Link to="/">Cancelar</Link>
              </Button>
              <Button type="submit" color="isSuccess">Salvar</Button>
              {(this.props.task && this.props.task.id) &&
                <Button
                  onClick={this.deleteTask(this.props.task.id)}
                  className="deleteButton"
                  color="isDanger"
                >
                  Delete
                </Button>
              }
            </Column>
          </Columns>
        </Content>
      </form>
    );
  }
}

const mapStateProps = ({ tasks }) => ({
  task: tasks.task,
});

export default connect(mapStateProps, {
  getTask,
  clearEdition,
})(TaskForm);
