import "./client.css";
import {NavLink} from 'react-router-dom';

function Clients() {
    return (
		<div class="invoice-page-wrapper">
			<div class="invoice-page-header">
				<div class="invoice-page-header-left">
					<h1>Clients</h1>
					<NavLink to="/invoices/new">
						<p class="invoice-create">
							<i class='bx bx-plus-circle'></i>
							Create Client
						</p>
					</NavLink>
				</div>
				<div class="invoice-page-header-right">
					<div class="header__search">
						<input type="search" placeholder="Search Client" class="header__input" />
						<i class='bx bx-search header__icon'></i>
					</div>
				</div>
			</div>
			
			<table>
				<thead>
					<tr>
						<th>S.No <i class='bx bx-sort-alt-2'></i></th>
						<th>Name <i class='bx bx-sort-alt-2'></i></th>
						<th>Email <i class='bx bx-sort-alt-2'></i></th>
						<th>Phone <i class='bx bx-sort-alt-2'></i></th>
						<th>Address <i class='bx bx-sort-alt-2'></i></th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>01</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-unpaid">Not Send</p>
						</td>
						<td>
							<div class="dropdown">
								<span>
									<i class='bx bx-dots-horizontal-rounded action-icon'></i>
								</span>
								<div class="dropdown-content">
									<a><i class='bx bx-edit'></i>Edit</a>
									<a><i class='bx bx-mail-send'></i>Re Send</a>
									<a><i class='bx bx-download'></i>Download</a>
									<a><i class='bx bx-archive'></i>Archive</a>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-paid">Send</p>
						</td>
						<td>
							<div class="dropdown">
								<span>
									<i class='bx bx-dots-horizontal-rounded action-icon'></i>
								</span>
								<div class="dropdown-content">
									<a><i class='bx bx-edit'></i>Edit</a>
									<a><i class='bx bx-mail-send'></i>Re Send</a>
									<a><i class='bx bx-download'></i>Download</a>
									<a><i class='bx bx-archive'></i>Archive</a>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-pending">Pending</p>
						</td>
						<td>
							<div class="dropdown">
								<span>
									<i class='bx bx-dots-horizontal-rounded action-icon'></i>
								</span>
								<div class="dropdown-content">
									<a><i class='bx bx-edit'></i>Edit</a>
									<a><i class='bx bx-mail-send'></i>Re Send</a>
									<a><i class='bx bx-download'></i>Download</a>
									<a><i class='bx bx-archive'></i>Archive</a>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-pending">Pending</p>
						</td>
						<td>
							<div class="dropdown">
								<span>
									<i class='bx bx-dots-horizontal-rounded action-icon'></i>
								</span>
								<div class="dropdown-content">
									<a><i class='bx bx-edit'></i>Edit</a>
									<a><i class='bx bx-mail-send'></i>Re Send</a>
									<a><i class='bx bx-download'></i>Download</a>
									<a><i class='bx bx-archive'></i>Archive</a>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-paid">Send</p>
						</td>
						<td>
							<div class="dropdown">
								<span>
									<i class='bx bx-dots-horizontal-rounded action-icon'></i>
								</span>
								<div class="dropdown-content">
									<a><i class='bx bx-edit'></i>Edit</a>
									<a><i class='bx bx-mail-send'></i>Re Send</a>
									<a><i class='bx bx-download'></i>Download</a>
									<a><i class='bx bx-archive'></i>Archive</a>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-pending">Pending</p>
						</td>
						<td>
							<div class="dropdown">
								<span>
									<i class='bx bx-dots-horizontal-rounded action-icon'></i>
								</span>
								<div class="dropdown-content">
									<a><i class='bx bx-edit'></i>Edit</a>
									<a><i class='bx bx-mail-send'></i>Re Send</a>
									<a><i class='bx bx-download'></i>Download</a>
									<a><i class='bx bx-archive'></i>Archive</a>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Clients;