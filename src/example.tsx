const [name, setName] = useState(null);
	const [nameFieldText, setNameFieldText] = useState("");

	if (name == null) return <div style={{ padding: "15px" }}>
		<h1>Welcome, Guest!</h1>
		<h5>Please set a name!</h5>
		<Stack direction="horizontal" gap={2}>
			<Form.Control value={nameFieldText} onChange={e => setNameFieldText(e.target.value)} required placeholder="Name" type="text"></Form.Control>
			<Button variant="outline-primary" onClick={e => setName(nameFieldText)}>Set</Button>
		</Stack>
	</div>;

	return <div style={{ padding: "15px" }}>
		<h1>Welcome, {name}!</h1>
		<p>Thanks for using <b>bddy</b>'s react + bootstrap template!</p>
		<hr />
		<h4>Here's some bootstap examples!</h4>
		<hr />
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
		<hr />
		{[
			'primary',
			'secondary',
			'success',
			'danger',
			'warning',
			'info',
			'light',
			'dark',
		].map((variant) => (
			<Alert key={variant} variant={variant}>
				This is a {variant} alert—check it out!
			</Alert>
		))}
		<hr />
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		<br />
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>

		<br />
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		<hr />
		{[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
			<Navbar key={expand} bg="light" expand={expand} className="mb-3">
				<Container fluid>
					<Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								Offcanvas
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">Link</Nav.Link>
								<NavDropdown
									title="Dropdown"
									id={`offcanvasNavbarDropdown-expand-${expand}`}
								>
									<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		))}
		<hr />
		<Button variant="outline-primary">Primary</Button>{' '}
		<Button variant="outline-secondary">Secondary</Button>{' '}
		<Button variant="outline-success">Success</Button>{' '}
		<Button variant="outline-warning">Warning</Button>{' '}
		<Button variant="outline-danger">Danger</Button>{' '}
		<Button variant="outline-info">Info</Button>{' '}
		<Button variant="outline-light">Light</Button>{' '}
		<Button variant="outline-dark">Dark</Button>{' '}
		<Button variant="primary">Primary</Button>{' '}
		<Button variant="secondary">Secondary</Button>{' '}
		<Button variant="success">Success</Button>{' '}
		<Button variant="warning">Warning</Button>{' '}
		<Button variant="danger">Danger</Button>{' '}
		<Button variant="info">Info</Button>{' '}
		<Button variant="light">Light</Button>{' '}
		<Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
	</div>