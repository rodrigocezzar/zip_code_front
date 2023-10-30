# Usa uma imagem oficial do Node como base
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências primeiro para aproveitar o cache do Docker
COPY package*.json ./

# Instala o Create React App globalmente e depois as dependências do projeto
RUN npm install -g create-react-app && npm install

# Copia os demais arquivos do projeto
COPY . .

# Expõe a porta padrão do React (3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
