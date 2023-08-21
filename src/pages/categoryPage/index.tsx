import * as Styled from "./index.styled";

type CategoryPageProps = {
  columns: number;
  categoryTitle: string;
};

export default function CategoryPage({
  columns,
  categoryTitle,
}: CategoryPageProps) {
  return (
    <Styled.Container columns={columns}>
      <h2 className="category-title">{categoryTitle}</h2>
    </Styled.Container>
  );
}
