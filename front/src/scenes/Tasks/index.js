import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Content,
  Title,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from 're-bulma';

import { getTasks } from '../../actions/tasks';

class App extends PureComponent {
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    console.log(this.props.tasks)
    return (
      <Content>
        <Title size="is1">Tasks</Title>
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            { this.props.tasks.map(task => (
              <Tr key={task.id}>
                <Td>
                  <Link to={`task/${task.id}`}>
                    {task.id}
                  </Link>
                </Td>
                <Td>
                  <Link to={`task/${task.id}`}>
                    {task.title}
                  </Link>
                </Td>
                <Td>
                  <Link to={`task/${task.id}`}>
                    {task.description}
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Content>
    );
  }
}

const mapState = ({ tasks }) => ({
  tasks: tasks.data,
})

const mapDispatch = {
  getTasks,
}

export default connect(mapState, mapDispatch)(App);
