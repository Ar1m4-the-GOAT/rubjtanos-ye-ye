export default function Privacy() {
    const styles = {
        div: {
            margin: '30px',
        },
        p1: {
            fontFamily: 'Times new Roman',
            lineHeight: '1.5',
        }
    };
    return(
        <div style={styles.div}>
            <h1>I tuoi dati verranno venduti a chiunque ci paghi a sufficienza XD XD XD</h1>
            <h3>A parte gli scherzi, cosa ne facciamo dei tuoi dati?</h3>
            <p style={styles.p1}>
            Presso RUBJ-THANOS, ci impegniamo a proteggere la tua privacy e a garantire la sicurezza delle informazioni che ci fornisci.<br></br>
            Quando interagisci con il nostro sito web o utilizzi i nostri servizi, potremmo raccogliere diverse tipologie di informazioni,
            inclusi dati personali, al fine di fornirti un'esperienza personalizzata e soddisfacente.<br></br><br></br>

            Le informazioni che potremmo raccogliere includono, ma non sono limitate a:<br></br><br></br>

            - <b>Informazioni di contatto</b>: nome, indirizzo e-mail, numero di telefono, indirizzo di spedizione.<br></br>
            - <b>Informazioni di pagamento</b>: dati della carta di credito/debito, informazioni di fatturazione.<br></br>
            - <b>Informazioni sulle interazioni</b>: dati di navigazione, cronologia degli acquisti, preferenze di prodotto.<br></br><br></br>

            Utilizziamo queste informazioni per elaborare gli ordini, fornirti assistenza clienti, migliorare i nostri servizi e
            personalizzare la tua esperienza di shopping.<br></br>
            È importante sottolineare che raccogliamo solo le informazioni strettamente necessarie per soddisfare le tue richieste e 
            non condividiamo mai i tuoi dati personali con terze parti senza il tuo consenso esplicito,
            a meno che non sia richiesto per adempiere agli obblighi legali o per proteggere i nostri diritti, la tua sicurezza o la sicurezza degli altri.
            Ti assicuriamo che implementiamo misure di sicurezza appropriate per proteggere le tue informazioni personali da accessi non autorizzati, 
            perdite o alterazioni.
            Le informazioni sensibili, come i dati di pagamento, vengono crittografate e trasmesse tramite protocolli sicuri per garantire la massima protezione
            durante le transazioni online.
            </p>
        </div>
    );
}