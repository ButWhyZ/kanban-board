const ItemList = ({ items, setItems }) => {
const remove = (idx) =>setItems(items.filter((_,i)=> i != idx ));

    return (
        <ul> 
            {items.map((value,idx) => (
                <li key={idx}>
                    {value}
                    <button onClick={() => remove(idx)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export { ItemList };