import "./invoices.css";
import {NavLink} from 'react-router-dom';

function Invoices() {
    return (
		<div class="invoice-page-wrapper">
			<div class="invoice-page-header">
				<div class="invoice-page-header-left">
					<h1>Invoices</h1>
					<NavLink to="/invoices/new">
						<p class="invoice-create">
							<i class='bx bx-plus-circle'></i>
							Create
						</p>
					</NavLink>
				</div>
				<div class="invoice-page-header-right">
					<div class="header__search">
						<input type="search" placeholder="Search Invoice" class="header__input" />
						<i class='bx bx-search header__icon'></i>
					</div>
				</div>
			</div>
			
			<table>
				<thead>
					<tr>
						<th>
							<label class="checkbox-container">
								<input type="checkbox" />All
								<span class="checkmark"></span>
							</label>
						</th>
						<th>Name <i class='bx bx-sort-alt-2'></i></th>
						<th>Price <i class='bx bx-sort-alt-2'></i></th>
						<th>Client <i class='bx bx-sort-alt-2'></i></th>
						<th>Status <i class='bx bx-sort-alt-2'></i></th>
						<th>Date <i class='bx bx-sort-alt-2'></i></th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="select-box">
								<label class="checkbox-container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<i class='bx bx-file invoice-icon'></i>
							</div>
						</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
							<span class="invoice-number">Invoice no. 88</span>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-unpaid">Not Send</p>
						</td>
						<td>11:21 08.10.2121</td>
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
						<td>
							<div class="select-box">
								<label class="checkbox-container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<i class='bx bx-file invoice-icon'></i>
							</div>
						</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
							<span class="invoice-number">Invoice no. 88</span>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-paid">Send</p>
						</td>
						<td>11:21 08.10.2121</td>
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
						<td>
							<div class="select-box">
								<label class="checkbox-container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<i class='bx bx-file invoice-icon'></i>
							</div>
						</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
							<span class="invoice-number">Invoice no. 88</span>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-pending">Pending</p>
						</td>
						<td>11:21 08.10.2121</td>
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
						<td>
							<div class="select-box">
								<label class="checkbox-container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<i class='bx bx-file invoice-icon'></i>
							</div>
						</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
							<span class="invoice-number">Invoice no. 88</span>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-pending">Pending</p>
						</td>
						<td>11:21 08.10.2121</td>
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
						<td>
							<div class="select-box">
								<label class="checkbox-container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<i class='bx bx-file invoice-icon'></i>
							</div>
						</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
							<span class="invoice-number">Invoice no. 88</span>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-paid">Send</p>
						</td>
						<td>11:21 08.10.2121</td>
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
						<td>
							<div class="select-box">
								<label class="checkbox-container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<i class='bx bx-file invoice-icon'></i>
							</div>
						</td>
						<td>
							<p class="invoice-name">New Project expense invoice</p>
							<span class="invoice-number">Invoice no. 88</span>
						</td>
						<td>$100.00</td>
						<td>Apple</td>
						<td>
							<p class="status status-pending">Pending</p>
						</td>
						<td>11:21 08.10.2121</td>
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

export default Invoices;