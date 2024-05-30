export default function AddProduct({ user, setUser, addProduct }) {
    return (<><form onSubmit={(e) => { addProduct(e) }}><input value={user} onChange={(e) => {
        setUser(e.target.value)
    }}></input><button type="submit">Add product</button></form></>)
}