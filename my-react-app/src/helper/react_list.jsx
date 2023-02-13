function ListReact (array) {
	return array.map((item) => (
		<option key={item} value={item}>
		  {item}
		</option>
	  ));
}

export {ListReact}