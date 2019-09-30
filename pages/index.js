import {BasicPicker} from 'react-color-tools'

const Contenedor = (props)=>(
	<div style={{
		background:props.color,
		textAlign:"center",
		boder:"1px solid",
		width:"800px",
		margin:"0 auto",
		color:"#FFFFFF",
		padding:"20px",
	}}>
		{props.children}
	</div>

	)
function Figura1(props){
	return(
		<img src={`./static/${props.imagen}`} alt="" width="200px"/>
		)
}



function Seccion1(props){
	return(
		<section>
			<h2>Esta es la seccion 1</h2>
			<Figura1 imagen={props.imagen} />
		</section>
		)
}


class Index extends React.Component{

	state ={
		color1:'#392FFF',
		color2:'green'
	}


	render(){

		const {color1,color2} = this.state

		return(
		<React.Fragment>
			<Contenedor color={color1}>
				<h1>Bienvenidos a mi App con NextJS</h1>
				<p>Esta es mi primera aplicación con NextJS</p>
				<Seccion1 imagen="logo-javascript.png" />
				<BasicPicker
					color={this.state.color}
					onChange={(color1)=>this.setState({color1})}
				/>
			 </Contenedor>
			 <Contenedor color={color2}>
				<h1>Bienvenidos a mi App con NextJS</h1>
				<p>Esta es mi primera aplicación con NextJS</p>
				<Seccion1 imagen="logo-react.png" />
				<BasicPicker
					color={this.state.color}
					onChange={(color2)=>this.setState({color2})}
				/>
			 </Contenedor>
		</React.Fragment>	
			)
	}
	
}

export default Index