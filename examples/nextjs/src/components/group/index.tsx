import { CreateGroup } from './create';
import { DeleteGroup } from './delete';
import { GroupInfo } from './info';
import { ListGroup } from './list';

export const Group = () => {
  return (
    <div>
      <h2>Group</h2>

      <CreateGroup />

      <DeleteGroup />

      <GroupInfo />

      <ListGroup />
    </div>
  );
};
