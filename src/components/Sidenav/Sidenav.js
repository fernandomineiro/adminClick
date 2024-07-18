import {
	CheckOutlined,
	CodeSandboxOutlined,
	FileDoneOutlined,
	FileOutlined,
	FileSyncOutlined,
	FlagOutlined,
	HomeOutlined,
	MinusSquareOutlined,
	ShoppingCartOutlined,
	SettingOutlined,
	ShoppingOutlined,
	UnorderedListOutlined,
	UsergroupAddOutlined,
	UserOutlined,
	UserSwitchOutlined,
	WalletOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
// import styles from "./Sidenav.module.css";

const Sidenav = ({ color, sideNavOpenKeys }) => {
	const menu = [
		{
			label: (
				<NavLink to='/dashboard'>
					<span>Dashboard</span>
				</NavLink>
			),
			key: "dashboard",
			icon: <HomeOutlined />,
		},
		{
			label: (
				<NavLink to='/pos'>
					<span>Ponto de venda</span>
				</NavLink>
			),
			key: "pos",
			icon: <ShoppingCartOutlined />,
		},
		{
			label: (
				<NavLink to='/integration'>
					<span>Integrações</span>
				</NavLink>
			),
			key: "integration",
			icon: <ShoppingCartOutlined />,
		},
		{
			label: "Produto",
			key: "product",
			icon: <CodeSandboxOutlined />,
			children: [
				{
					label: (
						<NavLink to='/product'>
							<span>Produtos</span>
						</NavLink>
					),
					key: "products",
					icon: <UnorderedListOutlined />,
				},
				{
					label: (
						<NavLink to='/product-category'>
							<span>Categoria</span>
						</NavLink>
					),
					key: "productCategory",
					icon: <UnorderedListOutlined />,
				},
				{
					label: (
						<NavLink to='/product-subcategory'>
							<span>Sub categoria</span>
						</NavLink>
					),
					key: "productSubcategory",
					icon: <UnorderedListOutlined />,
				},
				{
					label: (
						<NavLink to='/product-brand'>
							<span>Marca</span>
						</NavLink>
					),
					key: "productBrand",
					icon: <UnorderedListOutlined />,
				},
			],
		},
		{
			label: "Fornecedores",
			key: "purchase",
			icon: <ShoppingOutlined />,
			children: [
				{
					label: (
						<NavLink to='/supplier'>
							<span>Fornecedores</span>
						</NavLink>
					),
					key: "suppliers",
					icon: <UserOutlined />,
				},
				{
					label: (
						<NavLink to='/purchase'>
							<span>Nova venda</span>
						</NavLink>
					),
					key: "newPurchase",
					icon: <CheckOutlined />,
				},
				{
					label: (
						<NavLink to='/purchaselist'>
							<span>Lista de vendas</span>
						</NavLink>
					),
					key: "purchaseList",
					icon: <UnorderedListOutlined />,
				},
			],
		},
		{
			label: "Vendas",
			key: "sale",
			icon: <MinusSquareOutlined />,
			children: [
				{
					label: (
						<NavLink to='/customer'>
							<span>Clientes</span>
						</NavLink>
					),
					key: "customers",
					icon: <UserOutlined />,
				},
				{
					label: (
						<NavLink to='/salelist'>
							<span>Lista de vendas</span>
						</NavLink>
					),
					key: "saleList",
					icon: <UnorderedListOutlined />,
				},
			],
		},
		{
			label: "Planos",
			key: "accounts",
			icon: <WalletOutlined />,
			children: [
				{
					label: (
						<NavLink to='/account/'>
							<span>
Conta</span>
						</NavLink>
					),
					key: "accountList",
					icon: <UnorderedListOutlined />,
				},
				{
					label: (
						<NavLink to='/transaction/create'>
							<span>Nova transação</span>
						</NavLink>
					),
					key: "newTransaction",
					icon: <CheckOutlined />,
				},
				{
					label: (
						<NavLink to='/transaction/'>
							<span>Lista de transações</span>
						</NavLink>
					),
					key: "transactionList",
					icon: <UnorderedListOutlined />,
				},
			],
		},
		{
			label: "Relatório",
			key: "report",
			icon: <FlagOutlined />,
			children: [
				{
					label: (
						<NavLink to='/account/trial-balance'>
							<span>Balancete</span>
						</NavLink>
					),
					key: "trialBalance",
					icon: <FileDoneOutlined />,
				},
				{
					label: (
						<NavLink to='/account/balance-sheet'>
							<span>Balanço patrimonial</span>
						</NavLink>
					),
					key: "balanceSheet",
					icon: <FileOutlined />,
				},
				{
					label: (
						<NavLink to='/account/income'>
							<span>Declaração de renda</span>
						</NavLink>
					),
					key: "incomeStatement",
					icon: <FileSyncOutlined />,
				},
			],
		},

		{
			label: "Afiliado",
			key: "hr",
			icon: <UserOutlined />,
			children: [
				{
					label: (
						<NavLink to='/hr/staffs'>
							<span>Afiliados</span>
						</NavLink>
					),
					key: "staffs",
					icon: <UsergroupAddOutlined />,
				},
				{
					label: (
						<NavLink to='/role'>
							<span>Função e permissões</span>
						</NavLink>
					),
					key: "roleAndPermissions",
					icon: <UserSwitchOutlined />,
				},
				{
					label: (
						<NavLink to='/designation/'>
							<span>Designação</span>
						</NavLink>
					),
					key: "designation",
					icon: <UserSwitchOutlined />,
				},
			],
		},

		{
			label: "Configurações",
			key: "settings",
			icon: <SettingOutlined />,
			children: [
				{
					label: (
						<NavLink to='/invoice-setting'>
							<span>
Configurações de fatura</span>
						</NavLink>
					),
					key: "invoiceSetting",
					icon: <SettingOutlined />,
				},
			],
		},
	];

	return (
		<div>
			<Menu
				theme='dark'
				mode='inline'
				items={menu}
				className='sidenav-menu'
				// openKeys={[sideNavOpenKeys]}
				// style={{ backgroundColor: "transparent" }}
			/>
		</div>
	);
};

export default Sidenav;
