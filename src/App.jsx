import Main from "./layouts/Main";
import ItemContextProvider from "./store/ItemContext";

const App = () => {
  return (
    <ItemContextProvider>
      <section className=" w-11/12 md:w-8/12 mx-auto">
        <Main />
      </section>
    </ItemContextProvider>
  );
};

export default App;
