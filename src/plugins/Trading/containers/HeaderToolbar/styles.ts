import styled from 'styled-components';

export const HeaderToolbarStyle = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	padding: 15px 30px;
	background-color: #313445;

	.td-header__toolbar {
		&--left {
			display: flex;
			height: 100%;
		}
		&--right {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			.link-tutorial {
				color: #848e9c;
				margin-left: 12px;
			}
		}
		&-item {
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			margin-left: 15px;

			&:last-child {
				margin-right: 5px;
			}

			&-title {
				font-weight: 700;
				font-size: 16px;
				color: #fff;
				margin: 0;
			}

			&-site {
				color: #848e9c;
				font-weight: 400;
				font-size: 12px;
			}

			&-text {
				color: #848e9c;
				font-weight: 400;
				font-size: 11px;
			}

			&-value {
				margin: 0;
				font-size: 12px;

				&-positive {
					color: var(--header-positive-text-color);
					font-weight: 500;
				}

				&-negative {
					color: var(--header-negative-text-color);
					font-weight: 500;
				}

				&-data {
					color: wheat;
					font-weight: 400;
					font-size: calc(var(--font-size) * 1);
				}
			}
		}
	}
`;