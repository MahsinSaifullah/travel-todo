interface FormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const Form: React.FC<FormProps> = ({onSubmit}) => {
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <h3>What do you need for your trip? 😍</h3>
        <select>
            {Array.from({length: 20}, (_, i) => i + 1).map(num => {
                return <option value={num} key={num}>{num}</option>
            })}
        </select>
        <input type="text" placeholder="Item..." />
        <button>Add</button>
    </form>
  )
}

