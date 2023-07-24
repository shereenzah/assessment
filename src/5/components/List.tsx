import { FunctionComponent } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ItemProps {
  id: number;
  name: string;
}
interface ListProps {
  items: ItemProps[];
}

const List: FunctionComponent<ListProps> = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
