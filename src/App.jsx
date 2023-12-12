import AddNewFile from "./components/home/AddNewFile";
import Files from "./components/home/Files";
import Header from "./components/home/Header";
import SearchFile from "./components/home/SearchFile";

export default function App() {
  return (
    <main className=" max-w-screen-md container mx-auto py-8 px-2 grid">
      <Header />
      <SearchFile />
      <Files />
      <AddNewFile />
    </main>
  );
}
