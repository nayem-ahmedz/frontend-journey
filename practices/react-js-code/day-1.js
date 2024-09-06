const studentInfo = (
    <div className='container'>
        <h1>Student Information</h1>
        <table className='table table-bordered table-hover w-50 mx-auto'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nayem</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>Hajifa</td>
                    <td>23</td>
                </tr>
            </tbody>
        </table>
    </div>
)

const fruits = ['Apple', 'Mango'];
fruits.push('Tomato');
const fruitList = (
  <div className='container'>
  <h1>Fruits List</h1>
  <ul>
    <li>{fruits[0]}</li>
    <li>{fruits[1]}</li>
    <li>Banana</li>
    <li>{fruits[2].toUpperCase()}</li>
  </ul>
  <label htmlFor='name'>Name</label> <br/>
  <input type='text' id='name'/> <br/>
  <p className='text-bg-primary my-3 p-3'>
    { (fruits.length==2 ? 'length is ' + fruits.length : 'length is not 2') }
  </p>
  </div>
);