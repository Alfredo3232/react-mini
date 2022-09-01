// const App = () => {
const Taco = ({taco}) => (
    <div>
        <h3>meat: {taco.meat}</h3>
        <p>salsa: {taco.salsa}</p> 
        <p>onion & cilandro = {taco.onionCilandro ? "yes" : "no"}</p>
        <hr/>
    </div>
)

class Stand extends React.Component {
    constructor(props){
        super()
        this.state = {
            tacos: [],
        }
        this.addWord = this.addWord.bind(this)
    }
    addWord(e){
        e.preventDefault()
        console.log("====>", e.target.onionCilandro.checked)

        let copy = [{
            meat: e.target.meat.value, 
            salsa: e.target.salsa.value,
            onionCilandro:  e.target.onionCilandro.checked
        }, ...this.state.tacos]

        this.setState({
            tacos: copy
        }, () => {
            console.log('this is the new state', this.state)
            let test = document.getElementsByName('addForm')[0]
            test.reset()
        })
    }

    render(){
        return (
            <div>
                <h1>Your Taco Order</h1>
                <form name='addForm' onSubmit={this.addWord}>
                    <h3>meat</h3>
                    <input type="text" name="meat"/>
                    <h3>salsa</h3>
                    <input type="text" name="salsa"/>
                    <h3>Onion & Cilandro</h3>
                    YES?<input type="checkbox" name="onionCilandro" /> 
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
                <hr/>
                <hr/>
                {
                    this.state.tacos.map(el => (<Taco taco={el} />))
                }
            </div>
        )
    }

}

ReactDOM.render(<Stand />, document.getElementById("app"))