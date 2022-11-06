import React from 'react'
import styled from 'styled-components'

const Style = styled.svg`
.background{
	position: fixed;
	fill: var(--main-color);
}
.primary{
	transform-origin: 50% 50%;
	transition: all 1s;
	>.odd{
		fill: var(--contrast-color);
	}
	>.even{
		fill: var(--orange);
	}
}
.secondary{
	transition: all 1s;
	fill: var(--orange-dark);
	transform-origin: 50% 50%;
}
.outline{
	fill: var(--contrast-color);
}
`
const Logo = () => {
  return (
	<div>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
		imageRendering="optimizeQuality"
		shapeRendering="geometricPrecision"
		textRendering="geometricPrecision"
		viewBox="0 0 3413 3413"
		id='logo'
		>
			<Style>
			<circle className="background" cx="1707" cy="1707" r="1633"/>
			
			<polygon 	className="secondary" 
						points="2678,735 	1947,1707 
								2678,2678 	1707,1947 
								735,2678 	1466,1707 
								735,735 	1707,1466 "/>

			<g className='primary'>
				<polygon className="odd north" 	points="1707,333	2029,1384	1707,1707"/>
				<polygon className="odd south" 	points="1384,2029	1707,3080	1707,1707"/>
				<polygon className="odd east" 	points="2029,2029	3080,1707	1707,1707"/>
				<polygon className="odd west" 	points="1384,1384	333,1707	1707,1707"/>
				
				<polygon className="even north" points="1707,333    1384,1384   1707,1707"/>
				<polygon className="even south" points="2030,2029   1707,3080   1707,1707"/>
				<polygon className="even east" 	points="1384,2029   333,1707    1707,1707"/>
				<polygon className="even west" 	points="2030,1384   3080,1707   1707,1707"/>
			</g>
			
			
			<path className="outline" d="M1707 3413c942,0 1706,-764 1706,-1706 0,-943 -764,-1707 -1706,-1707 -943,0 -1707,764 -1707,1707 0,942 764,1706 1707,1706zm0 -155c856,0 1551,-695 1551,-1551 0,-857 -695,-1552 -1551,-1552 -857,0 -1552,695 -1552,1552 0,856 695,1551 1552,1551z"/>
			</Style>
		</svg>
	</div>
)
}

export default Logo