import ExportaNome from "./componnents/ExportaNome";

function App(){
  return(
    <div>
      <h1>Hello world!</h1>
      <ExportaNome aluno="Raythan" idade={22}/><br />
      <ExportaNome aluno="Abc" idade={20}/>
    </div>
  );
}

export default App;