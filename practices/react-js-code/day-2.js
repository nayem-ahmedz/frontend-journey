// 5 Sep 2024
let dept = 'CSE';
function StudentData(props){
  return(
    <div className='container'>
      <h1>Student Data of Metropolitan University, {dept}</h1>
      <table className='table table-bordered table-hover w-50 mx-auto'>
        <thead>
          <tr>
            <th>{props.th1}</th>
            <th>{props.th2}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nayem</td>
            <td>23</td>
          </tr>
          <tr>
            <td>Hajifa</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function PrintAgain(){
  return(
    <>
      <StudentData th1='Fame' th2='Ame'/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <StudentData th1='Name' th2='Age'/>
  // default code
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
const fC = document.getElementById('footer');
const fC_Root = ReactDOM.createRoot(fC);
fC_Root.render(
  <FruitLists/>
);



// Component FruitLists
const fruits = ['Mango', 'Apple', 'Banana'];
function FruitLists(){
    return(
        <ul>
            <p>Lists of Fruits</p>
            <li> {fruits[0]} </li>
            <li> {fruits[1]} </li>
            <li> {fruits[2]} </li>
        </ul>
    );
}

export default FruitLists;

//to use it import first
//import FruitLists from './FruitLists.js';