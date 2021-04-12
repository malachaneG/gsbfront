import React from 'react'
import '../App.css';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Modal from 'react-bootstrap4-modal';

class CreateBill extends React.Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <body class="d-flex flex-column h-100">
      <Header />
      <body>
      <Modal dialogClassName="center modal-80w modal-dialog-scrollable modal-dialog-scrollable" visible={this.state.visible} onClickBackdrop={() => this.showModal()} >
											<div className="modal-header">
											<h5 className="modal-title">Modification de la fiche</h5>
    										</div>
											<div className="modal-body">

																							
												<h3> Frais forfaitaires</h3>
												<div class="card border-primary py-3 px-3 mb-3">
													<div class="card-body">
														<table class="table text-center">
															<thead>
															<tr>
																<th scope="col">Frais forfaitaires</th>
																<th scope="col">Quantité</th>
																<th scope="col">Montant unitaire</th>
																<th scope="col">Total</th>
																<th scope="col">Actions</th>
															</tr>
															</thead>
															<tbody>
															<tr>
																<td><label class="form-control-label"><strong>Nuitées</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="nightsQty" placeholder="Qte" value={this.state.nightsQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>80€</td>
																<td>{this.state.nightsQty * 80}</td>
																<td>
																	<button type="button" class="btn btn-danger btn-sm mr-2" data-action="delete" data-target="">
																		<i class="fas fa-trash"></i>
																	</button>
																	<button type="button" class="btn btn-success btn-sm" data-action="delete" data-target="">
																		<i class="fas fa-edit"></i>
																	</button>

																</td>
															</tr>
															<tr>
																<td><label for="" class="form-control-label"><strong>Repas</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="repasQty" placeholder="Qte" value={this.state.repasQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>29€</td>
																<td>{this.state.repasQty * 29}</td>
															</tr>
															<tr>
																<td><label for="" class="form-control-label"><strong>Kilométrage</strong></label></td>
																<td><input className="form-control form-control-sm" type="text" name="kmQty" placeholder="Qte" value={this.state.kmQty} onChange={(e) => this.handleChange(e)} /></td>
																<td>0,8</td>
																<td>{(this.state.kmQty * 0.8).toFixed(2)}</td>
															</tr>
															</tbody>
														</table>
													</div>
												</div>    
												
											

												<h3>Frais hors-forfaits</h3>
												<div className="fraishorsforfait">
												<button className = "btn btn-info" onClick={() => this.addRow()}>Ajouter frais hors forfait</button>
												</div>
												<div class="card border-primary py-3 px-3">
													<div class="card-body">
														<table class="table text-center">
															<thead>
															<tr>
																<th scope="col">Dates</th>
																<th scope="col">Libellé</th>
																<th scope="col">Montant</th>
																<th scope="col"> Justificatifs</th>
																<th scope="col"> Actions</th>
															</tr>
															</thead>
															<tbody>
																{ this.state.rows.map((r, i) => {
																	return (
																		<tr key={i}>
																			<th scope="row"><input type="date"/></th>
																			<td><input className="form-control form-control-sm" type="text" placeholder="qte"/></td>
																			<td><input type= "text" placeholder="Libelle"></input></td>
																			<td><input type="file"></input></td>
																			<td><button className="btn btn-danger btn-sm" onClick={() => this.removeRow(i)}>x</button></td>
																		</tr>
																	)
																})}
															<tr>
																<td><input type="date"/></td>
																<td><input type="text"/></td>
																<td><input type="number"/></td>
																<td> <input type="file"/></td>
																<td>
																	<button type="button" class="btn btn-danger btn-sm mr-2" data-action="delete" data-target="">
																		<i class="fas fa-trash"></i>
																	</button>
																	<button type="button" class="btn btn-success btn-sm" data-action="delete" data-target="">
																		<i class="fas fa-edit"></i>
																	</button>

																</td>
															</tr>
															<tr>
																<td><input type="date"/></td>
																<td><input type="text"/></td>
																<td><input type="number"/></td>
																<td> <input type="file"/></td>
															</tr>
															<tr>
																<td><label for="" class="form-control-label"></label></td>
															</tr>
															</tbody>
														</table>
													</div>
												</div>
												
											</div>
											<div className="modal-footer">
											<button type="button" className="btn btn-secondary" onClick={ () => this.postFiche()}>
												Enregistrer
											</button>
											<button type="button" className="btn btn-primary" onClick={this.handleClose}>
												Annuler
											</button>
											</div>
										</Modal>
                  </body>
      <Footer />

      </body>
    )
  }
}

export default CreateBill;