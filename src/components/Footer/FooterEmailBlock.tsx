import React from 'react'

interface FooterEmailBlockProps {
	title: string
	email: string
}

const FooterEmailBlock: React.FC<FooterEmailBlockProps> = ({ title, email }) => {
	const [isCopy, setIsCopy] = React.useState<boolean>(false)
	const [isCloseAnimationCopy, setIsCloseAnimationCopy] = React.useState<boolean>(false)

	const onClickCopy = () => {
		if (setIsCopy) {
			navigator.clipboard.writeText(email)

			setIsCopy(true)

			setTimeout(() => {
				setIsCloseAnimationCopy(true)

				setTimeout(() => {
					setIsCopy(false)
					setIsCloseAnimationCopy(false)
				}, 390)
			}, 3000)
		}
	}

	return (
		<div className="footer-block-emails-block" onClick={onClickCopy}>
			<p className="footer-block-emails-block__subtitle">
				{title}
			</p>
			<p className="footer-block-emails-block__email">
				{email}

				{isCopy ? <span className={`${isCloseAnimationCopy ? "close" : ""}`}>
					Скопировано

					<svg width="11" height="8" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.459473 4.82178L5.61322 9.97555" stroke="black" strokeWidth="1.3" />
						<path d="M4.62451 9.97538L13.4595 1.14038" stroke="black" strokeWidth="1.3" />
					</svg>
				</span> : null}
			</p>
		</div>
	)
}

export default FooterEmailBlock