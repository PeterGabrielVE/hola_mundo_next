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
function Figura1(){
	return(
		<img src="./static/logo-javascript.png" alt="" width="200px"/>
		)
}



function Seccion1(){
	return(
		<section>
			<h2>Esta es la seccion 1</h2>
			<Figura1/>
		</section>
		)
}


class Index extends React.Component{

	state ={
		color:'#392FFF'
	}


	render(){
		return(
		<Contenedor color={this.state.color}>
			<h1>Bienvenidos a mi App con NextJS</h1>
			<p>Esta es mi primera aplicación con NextJS</p>
			<Seccion1/>
			</Contenedor>
			)
	}
	
}

export default Index