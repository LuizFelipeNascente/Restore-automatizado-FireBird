# restore-firebird-automatizado

Projeto realizado em um Hackthon. 
Idealizadores e desenvolvedores:

Luiz Felipe, Leonardo,
Ana Paula, Francisco


Sistema completo com Front, Back e Scripts para automatização de restore em banco de dados firebase. 

1 - A aplicação está com autenticação feita através do firebase e context do react. O Primeiro passo é iniciar um projeto no console do firebase e fazer a conexão com front. A conexão é feita através de variáveis de ambiente. 

Tela de cadastro de users no firebase.

![Firebase](https://user-images.githubusercontent.com/65420416/164802945-b432cd2a-afad-4157-be5e-91ba0bb6e967.png)

Tela de login da aplicação. 

![Login](https://user-images.githubusercontent.com/65420416/164801497-8edb2c2d-9151-4c61-89ef-0432b9af70a7.png)

2 - A página principal é responsável pelo Upload do arquivo para o servidor onde os scripts devem rodar em loop até encontrar os parâmetros definidos e iniciaro restore ou notificar em caso processo manual. 

![Home](https://user-images.githubusercontent.com/65420416/164802507-f8b2c340-4477-42a0-a758-36f9450d3f61.png)

![Seleciona](https://user-images.githubusercontent.com/65420416/164802517-92109ac6-4f4a-44d1-966a-fcb02048e7d7.png)

![Subindo](https://user-images.githubusercontent.com/65420416/164802527-64cc3866-1d8e-4f34-ac74-8510aae92358.png)

![Upload ok](https://user-images.githubusercontent.com/65420416/164802534-142e59dc-22b0-436b-9951-d5bdf8a9fcf9.png)

Para o funcionamento do servidor, deve-se definir a porta que irá rodar (atualmente está na 3030) e setar essa conexão.

3- A estrutura atual comporta três tipos bancos, sendo também três scripst de monitoramento e você pode ou não usar essa estrutura, basta apenas remover os seletores da página Home e usar somente os que desejar.

Estrutura de pastas no servidor. 

![Estrutura](https://user-images.githubusercontent.com/65420416/164803335-a8dcaa3a-8112-41a0-9a34-a4073aa99683.png)

3.1 - Após o upload, uma nova pasta será criada no servidor, com o nome do arquivo + um parâmetro para identificação do script e + um hash aleatório. Dentro dessa pasta o arquivo backup será salvo. O script buscará pelo parâmetro que o próprio servidor já incluiu no nome da pasta e assim que encontrado, o restore começa. Ao finalizar ele renomeia essa pasta e o arquivo de backup que agora é um banco e em seguida na pasta do firebird, ele define um aliases para conectar nesse banco restaurado.

![Aliases](https://user-images.githubusercontent.com/65420416/164814551-69aa7038-4cfc-4e74-a97f-53b56bf33557.png)


4 - Será necessário conexão com seu banco de dados, atualmente está definido para o MongoDB e com os schemas já feitos. Os schemas já definidos salvam: nome, formato do arquivo, data do upload, local salvo e tamanho do arquivo. A conexão é feita atraves de variáveis de ambiente. 

Clauster no Mongo. 

![Banco](https://user-images.githubusercontent.com/65420416/164803446-cfd6e51d-4db1-4283-9dde-1601c7cc01dd.png)

5 - Por último a listagem dos dados salvos no banco. Faz parte da listagem: nome do aliases, tamanho, data do upload, nome do bkp e um texto facilitador para copiar e colar no arquivo ini. 

![Listagem](https://user-images.githubusercontent.com/65420416/164813665-40536265-4fe9-47a9-9084-2bc179f86abe.png)
