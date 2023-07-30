export default function Form() {
  return (
    <div className="w-2/5 h-screen border-4 border-black">
      <form className="flex flex-col ">
        <label htmlFor="name">name</label>
        <input type="text" />
      </form>
    </div>
  );
}
