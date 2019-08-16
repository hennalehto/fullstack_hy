import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const Users = ({ store }) => {
  return (
    <div>
      <h2>Users</h2>
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Blogs created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {store.getState().users.map(user =>
            <Table.Row key={user.username}>
              <Table.Cell>
                <Link to={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </Table.Cell>
              <Table.Cell>
                {user.blogs.length}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Users