interface button {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: ()=> void
}
export default function Button({ children, onClick, color = "primary" }: button) {
    
  return (
    <button type="button" className={"btn btn-" +color} onClick={onClick}>
      {children}
    </button>
  );
}
