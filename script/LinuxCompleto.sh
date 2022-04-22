#!/bin/bash

echo "Inicio do script de backup"
pastaOK=$(find @SeuDiskStorage@ -name '*-PENDENTE*')


MAILDE=Seus dados
SENHAMAIL=Seus dados
MAILPARA=Seus dados
SMTP=Seus dados
PORTA=Seus dados


################################################
######## FUNCAO PARA RENOMEAR A PASTA ##########
################################################

renomear(){

    substring=$(echo $pasta | cut -d '-' -f 1)
    
    processando=$substring"-PROCESSANDO"
    
    mv -f $pasta $processando

    cd $processando

    arquivo=$(dir)

    if [ -n "$arquivo" ] ; then
        for arquivos in $arquivo
            do 

                nomeBkp=$(echo "$substring" | cut -d '/' -f 8)
                
                fbkParaFdb $arquivos

                chmod 777 $arquivo

		rm $arquivos

                chmod 777 nomebd.fdb
                
                echo $nomeBkp"="$substring"-OK/nomebd.fdb" >> /opt/firebird/aliases.conf

            done
        
        cd ..

        mv -f $processando $substring"-OK"

        echo "pasta renomeada com sucesso"

    else
        echo "Não encontrado arquivos"
    fi

}


################################################
###### FUNCAO PARA GERAR FDB DE UM NBK #########
################################################

nbkParaFdb(){
    nice -19 /opt/firebird/bin/nbackup -R psbd.fdb BD_COMPLETO.nbk psbd_qua_1500.nbk
}

################################################

########FUNCAO MAIN############################

#echo "$pastaOK"
echo $pastaOK
if [ -n "$pastaOK" ] ; then
    for pasta in $pastaOK
        do
            #echo $pasta "PENDENTE"

            #echo $pasta | cut -d '-' -f 1
            renomear
            -f $MAILDE -t $MAILPARA -u "Sua msg" -m "Sua msg" -s $SMTP:$PORTA -xu $MAILDE -xp $SENHAMAIL


    done
else
    echo "pasta '-PENDENTE' não encontrada"
fi

echo "Script Finalizado"

sleep 900