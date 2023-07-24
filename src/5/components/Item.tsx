import { FunctionComponent } from "react";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface Props {
  item:ItemProps
}
interface ItemProps {
  id: number;
  name: string;
}
const Item: FunctionComponent<Props> = ({item}) => {
  return <li key={item.id}>{item.name}</li>
};

export default Item;
