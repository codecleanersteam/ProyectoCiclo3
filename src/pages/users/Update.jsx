import React from 'react'

const Update = () => {
	return (
		<div class="w-full h-full flex items-center justify-center flex-col">
			<div class="pb-5 space-y-10">
				<h1> ADMINISTRADOR DE USUARIOS</h1>
			</div>
			<form class="w-full flex items-center justify-center ">
				<div class="flex items-center justify-center bg-transparent">
					<div class="col-span-12">
						<div class="overflow-auto lg:overflow-visible">
							<div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
								<div class="text-start flex-auto justify-start">
									<input
										type="text"
										name="name"
										placeholder="Search..."
										class="
										w-1/3
										py-2
										border-b-2 border-blue-600
										outline-none
										focus:border-yellow-400" 
									/>
									<div>
										<div class="space-x-4 flex justify-end">
											<a href="#">
												<button
													class="
													bg-blue-500
													hover:bg-blue-700
													text-white
													py-1
													px-3
													sm
													rounded-full">
													Todos
												</button>
											</a>
											<a href="#">
												<button
													class="
													bg-blue-500
													hover:bg-blue-700
													text-white
													py-1
													px-3
													sm
													rounded-full">
													Administrador
												</button>
											</a>
											<a href="#">
												<button
													class="
												bg-blue-500
												hover:bg-blue-700
												text-white
												py-1
												px-3
												sm
												rounded-full">
												Usuario
												</button>
											</a>
										</div>
									</div>
									<table class="table text-gray-400 border-separate space-y-6 text-sm">
										<thead class="bg-blue-500 text-white">
											<tr>
												<th class="p-3">ID</th>
												<th class="p-3 text-left">Nombre</th>
												<th class="p-3 text-left">Phone</th>
												<th class="p-3 text-left">Rol</th>
												<th class="p-3 text-left">Estado</th>
												<th class="p-3 text-left">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr class="bg-blue-200 lg:text-black">
												<td class="p-3 font-medium capitalize">Nombre</td>
												<td class="p-3">@gmail.com</td>
												<td class="p-3">01648349009</td>
												<td class="p-3 uppercase">admin</td>
												<td class="p-3">
													<span class="bg-green-400 text-gray-50 rounded-md px-2">
														ACTIVO
													</span>
												</td>
												<td class="p-3">
													<a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
														<i class="material-icons-outlined text-base">Visibilidad</i>
													</a>
													<a href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
														<i class="material-icons-outlined text-base">Editar</i>
													</a>
													<a
														href="#"
														class="text-red-400 hover:text-gray-100 ml-2">
														<i class="material-icons-round text-base">Eliminar</i>
													</a>
												</td>
											</tr>
											<tr class="bg-blue-200 lg:text-black">
												<td class="p-3 font-medium capitalize">NombreoID</td>
												<td class="p-3">@gmail.com</td>
												<td class="p-3">01648349009</td>
												<td class="p-3 uppercase">user</td>
												<td class="p-3">
													<span class="bg-green-400 text-gray-50 rounded-md px-2">   
													ACTIVE
													</span>
												</td>
												<td class="p-3">
													<a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
														<i class="material-icons-outlined text-base">Visibilidad</i>
													</a>
													<a href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
														<i class="material-icons-outlined text-base">Editar</i>
													</a>
													<a
														href="#"
														class="text-red-400 hover:text-gray-100 ml-2"
													>
														<i class="material-icons-round text-base">Eliminar</i>
													</a>
												</td>
											</tr>
											<tr class="bg-blue-200 lg:text-black">
												<td class="p-3 font-medium capitalize">NombreoID</td>
												<td class="p-3">@gmail.com</td>
												<td class="p-3">01648349010</td>
												<td class="p-3 uppercase">admin</td>
												<td class="p-3">
													<span class="bg-green-400 text-gray-50 rounded-md px-2">
														ACTIVE
													</span>
												</td>
												<td class="p-3">
													<a href="#" class="text-gray-500 hover:text-gray-100 mr-2">
														<i class="material-icons-outlined text-base">Visibilidad</i>
													</a>
													<a href="#" class="text-yellow-400 hover:text-gray-100 mx-2">
														<i class="material-icons-outlined text-base">Editar</i>
													</a>
													<a
														href="#"
														class="text-red-400 hover:text-gray-100 ml-2">
														<i class="material-icons-round text-base">Eliminar</i>
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Update;
