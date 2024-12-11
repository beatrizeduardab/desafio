import './ListaDeUsuarios.js';
import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../servicos/apiprojeto.js';

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState('');
  const [erro, setErro] = useState(''); 

  useEffect(() => {
    const buscarUsuarios = async () => {
        try{
      const dados = await getUsuarios();
      if(dados.lenght === 0)
        throw new Error('Erro na busca dos dados dos usuários');
      setUsuarios(dados);
         } catch (erro){
            setErro('Erro ao buscar dados dos usuários');
         }
    };
    buscarUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
        <label htmlFor ="busca" className='label-estilo'>Name filter</label>
      <input
        type="text"
        className="input-busca"
        placeholder="Enter Name"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      {erro && <p className="erro-mensagem">{erro}</p>}

      <div className="lista-usuarios-container">
        {usuariosFiltrados.map((usuario) => (
          <div key={usuario.id} className="card-usuario">
            <h3>{usuario.name}</h3>
            <p>{usuario.email}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ListaDeUsuarios;
