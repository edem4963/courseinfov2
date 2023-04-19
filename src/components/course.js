const Course = ({courses}) => {

    console.log(courses[0].parts.map(part => part.exercises).reduce((a, c) => a + c, 0))
      
    
      return (
        <div>
          <Header course = {courses[0].name} />
          <Content part = {courses[0].parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)} />
          <Total exercise = {courses[0].parts.map(part => part.exercises).reduce((a, c) => a + c, 0)} />
          <Header course = {courses[1].name} />
          <Content part = {courses[1].parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)} />
          <Total exercise = {courses[1].parts.map(part => part.exercises).reduce((a, c) => a + c, 0)} />
    
        </div>
        
      )
    }
    const Header = (props) => {
      return (
        <div>
          <h1>{props.course}</h1>
        </div>
      )
    }
    const Content = (props) => {
    
        return (
          <div >
            <Part part={props.part} />
          </div>
        )
    }
    
    const Total = (props) => {
      return (
        <div>
          <p><strong>Number of exercises {props.exercise}</strong></p>
        </div>
      )
    }
    
    const Part = (props) => {
      return (
        <div>
          
            {props.part}
        
        </div>
      )
    }
    export default Course