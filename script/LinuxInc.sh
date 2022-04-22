#!/bin/bash

pastaOK=$(find @SeuDiskStorage@ -name '*-PENDENTE*')

MAILDE=Seus dados
SENHAMAIL=Seus dados
MAILPARA=Seus dados
SMTP=Seus dados
PORTA=Seus dados


echo $pastaOK
if [ -n "$pastaOK" ] ; then
    for pasta in $pastaOK
        do
            #echo $pasta "PENDENTE"

            #echo $pasta | cut -d '-' -f 1
            
            -f $MAILDE -t $MAILPARA -u "Sua msg" -m "Sua msg" -s $SMTP:$PORTA -xu $MAILDE -xp $SENHAMAIL


    done
else
    echo "pasta 'PENDENTE' não encontrada"
fi

echo "Script Finalizado"

sleep 900