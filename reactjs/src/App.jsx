/*
stylify-variables
  titleFontSize: '42px',
  containerWidth: '800px'
/stylify-variables

stylify-components
  container: 'max-width:$containerWidth margin:0__auto',
  title: 'text-align:center margin-top:100px font-size:$titleFontSize'
/stylify-components
*/
export default function App() {
	return (
		<div class="container">
			<div className="title">Hello World! 🎉</div>
		</div>
	);
}
