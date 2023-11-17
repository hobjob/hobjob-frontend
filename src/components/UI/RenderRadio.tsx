import React from "react";
import { WrappedFieldProps } from "redux-form";

const RenderRadio: React.FC<WrappedFieldProps> = ({ input }) => {
	return (
		<div className="radio">
			<input
				{...input}
				id={`${input.name}-${input.value}`}
				className="radio__field"
				type="radio"
			/>

			<label htmlFor={`${input.name}-${input.value}`} className={`radio__label`}>
				<p className="radio__label__text">{input.value}</p>
			</label>
		</div>);
};

export default RenderRadio;
