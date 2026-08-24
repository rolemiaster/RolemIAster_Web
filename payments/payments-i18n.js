(() => {
  "use strict";

  const supportedLocaleCodes = Object.freeze(["es", "en", "ru", "it", "pt", "fr", "de", "ar", "hi", "zh-CN", "ja", "ko"]);
  const aliases = Object.freeze({
    "zh": "zh-CN", "zh-cn": "zh-CN", "zh-hans": "zh-CN", "zh-sg": "zh-CN",
    "pt-br": "pt", "pt-pt": "pt", "es-es": "es", "es-419": "es",
  });

  const english = {
    siteTitle: "Secure payment · Solana Gateway", siteDescription: "Secure, direct checkout on the Solana network.",
    brandTitle: "Solana Gateway", brandSubtitle: "Direct payment on Solana", headerTrust: "Direct payment to the recipient account", languageLabel: "Language",
    loadingTitle: "Preparing your payment", loadingDetail: "Retrieving the secure order details…", errorTitle: "We could not open this payment", errorDetail: "Check that the link is complete and try again.", retry: "Try again",
    summaryEyebrow: "Order summary", summaryTitle: "Complete your payment", summaryIntro: "The project prepared this payment with its amount and description. Open your wallet, review it, and approve it only if it matches.", project: "Project", concept: "Description", total: "Total",
    securityTitle: "Your wallet remains under your control", securityDetail: "The gateway will never ask for your recovery phrase or private key.", paymentOn: "Pay on", qrLabel: "Payment QR code", qrHint: "Scan the QR code with a Solana Pay-compatible wallet", pay: "Pay with Phantom", openWallet: "Open with another compatible wallet", expires: "This link expires in",
    technical: "View payment technical details", recipient: "Recipient account", reference: "Unique reference", mint: "Asset mint", copy: "Copy", signatureQuestion: "Already paid and the status has not changed?", signatureDescription: "Paste the public transaction signature to check it again.", signaturePlaceholder: "Transaction signature", verify: "Check", footerIndependent: "Independent Solana gateway", footerVerified: "Payments verified on the Solana network",
    productFallback: "Secure payment on Solana.", noMint: "Not applicable to SOL", qrFallback: "The QR code could not be generated. Use the button to open your wallet.", explorer: "View transaction in Solana Explorer", copied: "Copied to clipboard", copyFailed: "Could not copy", generalError: "Something went wrong. Please try again.", retrying: "We could not update the status. We will try again automatically.", signatureEmpty: "Enter a signature to check it.", processing: "Processing…", completed: "Check completed.", walletUnavailable: "Phantom is not available in this browser. You can use the QR code or the alternative link.", walletReview: "Connected account: {address}. Review the amount, asset, and network in Phantom.", walletSent: "Transaction sent. We are verifying it on Solana…", walletCancelled: "You cancelled the operation in Phantom.", sent: "Transaction sent",
    "status.CREATED.title": "Preparing payment", "status.CREATED.detail": "We are preparing your order.", "status.PENDING.title": "Waiting for payment", "status.PENDING.detail": "Open your wallet and confirm the payment details.", "status.DETECTED.title": "Payment detected", "status.DETECTED.detail": "We are checking the transaction on Solana.", "status.CONFIRMING.title": "Confirming payment", "status.CONFIRMING.detail": "The network is confirming the transaction.", "status.CONFIRMED.title": "Payment confirmed", "status.CONFIRMED.detail": "The payment has been verified successfully.", "status.EXPIRED.title": "Link expired", "status.EXPIRED.detail": "This order no longer accepts new payments.", "status.FAILED.title": "Payment could not be confirmed", "status.FAILED.detail": "A valid transaction could not be verified.", "status.MANUAL_REVIEW.title": "Payment requires review", "status.MANUAL_REVIEW.detail": "This payment requires manual review.", "status.UNKNOWN.title": "Checking status", "status.UNKNOWN.detail": "We are checking your order.",
  };

  const localized = {
    es: { ...english,
      siteTitle: "Pago seguro · Pasarela Solana", siteDescription: "Pago seguro y directo en la red Solana.", brandTitle: "Pasarela Solana", brandSubtitle: "Pago directo en Solana", headerTrust: "Pago directo a la cuenta receptora", languageLabel: "Idioma", loadingTitle: "Preparando tu pago", loadingDetail: "Recuperando los datos seguros del pedido…", errorTitle: "No hemos podido abrir este pago", errorDetail: "Comprueba que el enlace sea completo y vuelve a intentarlo.", retry: "Reintentar", summaryEyebrow: "Resumen del pedido", summaryTitle: "Completa tu pago", summaryIntro: "El proyecto ha preparado este pago con su importe y concepto. Abre tu cartera, revísalo y apruébalo solo si coincide.", project: "Proyecto", concept: "Concepto", total: "Total", securityTitle: "Tu cartera permanece bajo tu control", securityDetail: "La pasarela nunca solicitará tu frase semilla ni tu clave privada.", paymentOn: "Pagar en", qrLabel: "Código QR del pago", qrHint: "Escanea el QR con una cartera compatible con Solana Pay", pay: "Pagar con Phantom", openWallet: "Abrir con otra cartera compatible", expires: "Este enlace caduca en", technical: "Ver datos técnicos del pago", recipient: "Cuenta receptora", reference: "Referencia única", mint: "Mint del activo", copy: "Copiar", signatureQuestion: "¿Ya pagaste y no cambia el estado?", signatureDescription: "Pega la firma pública de la transacción para comprobarla de nuevo.", signaturePlaceholder: "Firma de la transacción", verify: "Comprobar", footerIndependent: "Pasarela Solana independiente", footerVerified: "Pagos verificados en la red Solana", productFallback: "Pago seguro en Solana.", noMint: "No aplica para SOL", qrFallback: "No se pudo generar el QR. Usa el botón para abrir tu cartera.", explorer: "Ver transacción en Solana Explorer", copied: "Copiado al portapapeles", copyFailed: "No se pudo copiar", generalError: "Ha ocurrido un error. Inténtalo de nuevo.", retrying: "No hemos podido actualizar el estado. Lo intentaremos de nuevo automáticamente.", signatureEmpty: "Introduce una firma para comprobarla.", processing: "Procesando…", completed: "Comprobación completada.", walletUnavailable: "Phantom no está disponible en este navegador. Puedes usar el QR o el enlace alternativo.", walletReview: "Cuenta conectada: {address}. Revisa importe, activo y red en Phantom.", walletSent: "Transacción enviada. Estamos verificándola en Solana…", walletCancelled: "Has cancelado la operación en Phantom.", sent: "Transacción enviada",
      "status.CREATED.title": "Preparando el pago", "status.CREATED.detail": "Estamos preparando tu pedido.", "status.PENDING.title": "Esperando el pago", "status.PENDING.detail": "Abre tu cartera y confirma los datos del pago.", "status.DETECTED.title": "Pago detectado", "status.DETECTED.detail": "Estamos comprobando la transacción en Solana.", "status.CONFIRMING.title": "Confirmando el pago", "status.CONFIRMING.detail": "La red está confirmando la transacción.", "status.CONFIRMED.title": "Pago confirmado", "status.CONFIRMED.detail": "El pago se ha verificado correctamente.", "status.EXPIRED.title": "Enlace caducado", "status.EXPIRED.detail": "Este pedido ya no admite nuevos pagos.", "status.FAILED.title": "No se ha podido confirmar el pago", "status.FAILED.detail": "No se ha validado una transacción correcta.", "status.MANUAL_REVIEW.title": "Pago pendiente de revisión", "status.MANUAL_REVIEW.detail": "Este pago requiere una revisión manual.", "status.UNKNOWN.title": "Consultando el estado", "status.UNKNOWN.detail": "Estamos comprobando el pedido.",
    },
    ru: { ...english,
      siteTitle: "Безопасная оплата · Шлюз Solana", brandTitle: "Шлюз Solana", brandSubtitle: "Прямой платёж в Solana", headerTrust: "Прямой платёж на счёт получателя", languageLabel: "Язык", loadingTitle: "Подготавливаем платёж", loadingDetail: "Получаем защищённые данные заказа…", errorTitle: "Не удалось открыть этот платёж", errorDetail: "Проверьте ссылку и попробуйте снова.", retry: "Повторить", summaryEyebrow: "Сводка заказа", summaryTitle: "Завершите платёж", summaryIntro: "Проект подготовил этот платёж с фиксированной суммой и описанием. Откройте кошелёк, проверьте данные и подтвердите платёж только при совпадении.", project: "Проект", concept: "Описание", total: "Итого", securityTitle: "Ваш кошелёк остаётся под вашим контролем", securityDetail: "Шлюз никогда не запросит секретную фразу восстановления или закрытый ключ.", paymentOn: "Оплатить в", qrLabel: "QR-код платежа", qrHint: "Отсканируйте QR-код кошельком с поддержкой Solana Pay", pay: "Оплатить через Phantom", openWallet: "Открыть в другом совместимом кошельке", expires: "Срок действия ссылки истекает через", technical: "Показать технические данные платежа", recipient: "Счёт получателя", copy: "Копировать", signatureQuestion: "Уже оплатили, но статус не изменился?", signatureDescription: "Вставьте публичную подпись транзакции для повторной проверки.", signaturePlaceholder: "Подпись транзакции", verify: "Проверить", footerIndependent: "Независимый шлюз Solana", footerVerified: "Платежи проверяются в сети Solana", productFallback: "Безопасный платёж в Solana.", generalError: "Произошла ошибка. Повторите попытку.", processing: "Обработка…", completed: "Проверка завершена.", copied: "Скопировано в буфер обмена", copyFailed: "Не удалось скопировать", sent: "Транзакция отправлена",
      "status.CREATED.title": "Подготовка платежа", "status.CREATED.detail": "Мы подготавливаем ваш заказ.", "status.PENDING.title": "Ожидание платежа", "status.PENDING.detail": "Откройте кошелёк и подтвердите данные платежа.", "status.DETECTED.title": "Платёж обнаружен", "status.DETECTED.detail": "Мы проверяем транзакцию в Solana.", "status.CONFIRMING.title": "Подтверждение платежа", "status.CONFIRMING.detail": "Сеть подтверждает транзакцию.", "status.CONFIRMED.title": "Платёж подтверждён", "status.CONFIRMED.detail": "Платёж успешно проверен.", "status.EXPIRED.title": "Срок ссылки истёк", "status.EXPIRED.detail": "Этот заказ больше не принимает новые платежи.", "status.FAILED.title": "Платёж не подтверждён", "status.FAILED.detail": "Не удалось проверить корректную транзакцию.", "status.MANUAL_REVIEW.title": "Требуется проверка", "status.MANUAL_REVIEW.detail": "Этот платёж требует ручной проверки.", "status.UNKNOWN.title": "Проверяем статус", "status.UNKNOWN.detail": "Мы проверяем ваш заказ.",
    },
    it: { ...english,
      siteTitle: "Pagamento sicuro · Gateway Solana", brandTitle: "Gateway Solana", brandSubtitle: "Pagamento diretto su Solana", headerTrust: "Pagamento diretto al conto destinatario", languageLabel: "Lingua", loadingTitle: "Preparazione del pagamento", loadingDetail: "Recupero dei dati sicuri dell'ordine…", errorTitle: "Non è stato possibile aprire questo pagamento", errorDetail: "Verifica che il link sia completo e riprova.", retry: "Riprova", summaryEyebrow: "Riepilogo dell'ordine", summaryTitle: "Completa il pagamento", summaryIntro: "Il progetto ha preparato questo pagamento con importo e descrizione. Apri il wallet, controlla i dati e approva solo se corrispondono.", project: "Progetto", concept: "Descrizione", total: "Totale", securityTitle: "Il tuo wallet resta sotto il tuo controllo", securityDetail: "Il gateway non chiederà mai la frase di recupero o la chiave privata.", paymentOn: "Paga su", qrLabel: "Codice QR del pagamento", qrHint: "Scansiona il QR con un wallet compatibile con Solana Pay", pay: "Paga con Phantom", openWallet: "Apri con un altro wallet compatibile", expires: "Questo link scade tra", technical: "Mostra i dettagli tecnici del pagamento", recipient: "Conto destinatario", copy: "Copia", signatureQuestion: "Hai già pagato ma lo stato non cambia?", signatureDescription: "Incolla la firma pubblica della transazione per verificarla di nuovo.", signaturePlaceholder: "Firma della transazione", verify: "Verifica", footerIndependent: "Gateway Solana indipendente", footerVerified: "Pagamenti verificati sulla rete Solana", generalError: "Si è verificato un errore. Riprova.", processing: "Elaborazione…", completed: "Verifica completata.", sent: "Transazione inviata",
      "status.CREATED.title": "Preparazione del pagamento", "status.CREATED.detail": "Stiamo preparando il tuo ordine.", "status.PENDING.title": "In attesa del pagamento", "status.PENDING.detail": "Apri il wallet e conferma i dati del pagamento.", "status.DETECTED.title": "Pagamento rilevato", "status.DETECTED.detail": "Stiamo verificando la transazione su Solana.", "status.CONFIRMING.title": "Conferma del pagamento", "status.CONFIRMING.detail": "La rete sta confermando la transazione.", "status.CONFIRMED.title": "Pagamento confermato", "status.CONFIRMED.detail": "Il pagamento è stato verificato correttamente.", "status.EXPIRED.title": "Link scaduto", "status.EXPIRED.detail": "Questo ordine non accetta più nuovi pagamenti.", "status.FAILED.title": "Pagamento non confermato", "status.FAILED.detail": "Non è stato possibile verificare una transazione valida.", "status.MANUAL_REVIEW.title": "Pagamento da verificare", "status.MANUAL_REVIEW.detail": "Questo pagamento richiede una verifica manuale.", "status.UNKNOWN.title": "Verifica dello stato", "status.UNKNOWN.detail": "Stiamo verificando il tuo ordine.",
    },
    pt: { ...english, brandTitle: "Gateway Solana", brandSubtitle: "Pagamento direto na Solana", headerTrust: "Pagamento direto para a conta destinatária", languageLabel: "Idioma", loadingTitle: "Preparando seu pagamento", loadingDetail: "Recuperando os dados seguros do pedido…", errorTitle: "Não foi possível abrir este pagamento", errorDetail: "Verifique se o link está completo e tente novamente.", retry: "Tentar novamente", summaryEyebrow: "Resumo do pedido", summaryTitle: "Conclua seu pagamento", summaryIntro: "O projeto preparou este pagamento com valor e descrição. Abra sua carteira, confira e aprove somente se os dados coincidirem.", project: "Projeto", concept: "Descrição", total: "Total", securityTitle: "Sua carteira permanece sob seu controle", securityDetail: "O gateway nunca solicitará sua frase de recuperação ou chave privada.", paymentOn: "Pagar em", qrLabel: "Código QR do pagamento", qrHint: "Escaneie o QR com uma carteira compatível com Solana Pay", pay: "Pagar com Phantom", openWallet: "Abrir com outra carteira compatível", expires: "Este link expira em", technical: "Ver dados técnicos do pagamento", recipient: "Conta destinatária", copy: "Copiar", signatureQuestion: "Já pagou e o status não mudou?", signatureDescription: "Cole a assinatura pública da transação para verificá-la novamente.", signaturePlaceholder: "Assinatura da transação", verify: "Verificar", footerIndependent: "Gateway Solana independente", footerVerified: "Pagamentos verificados na rede Solana", generalError: "Ocorreu um erro. Tente novamente.", processing: "Processando…", completed: "Verificação concluída.", sent: "Transação enviada" },
    fr: { ...english, brandTitle: "Passerelle Solana", brandSubtitle: "Paiement direct sur Solana", headerTrust: "Paiement direct vers le compte destinataire", languageLabel: "Langue", loadingTitle: "Préparation de votre paiement", loadingDetail: "Récupération des données sécurisées de la commande…", errorTitle: "Impossible d'ouvrir ce paiement", errorDetail: "Vérifiez que le lien est complet et réessayez.", retry: "Réessayer", summaryEyebrow: "Récapitulatif de la commande", summaryTitle: "Finalisez votre paiement", summaryIntro: "Le projet a préparé ce paiement avec son montant et sa description. Ouvrez votre wallet, vérifiez les données et approuvez seulement si elles correspondent.", project: "Projet", concept: "Description", total: "Total", securityTitle: "Votre wallet reste sous votre contrôle", securityDetail: "La passerelle ne demandera jamais votre phrase de récupération ni votre clé privée.", paymentOn: "Payer sur", qrLabel: "Code QR du paiement", qrHint: "Scannez le QR avec un wallet compatible Solana Pay", pay: "Payer avec Phantom", openWallet: "Ouvrir avec un autre wallet compatible", expires: "Ce lien expire dans", technical: "Voir les détails techniques du paiement", recipient: "Compte destinataire", copy: "Copier", signatureQuestion: "Vous avez déjà payé et le statut ne change pas ?", signatureDescription: "Collez la signature publique de la transaction pour la vérifier à nouveau.", signaturePlaceholder: "Signature de la transaction", verify: "Vérifier", footerIndependent: "Passerelle Solana indépendante", footerVerified: "Paiements vérifiés sur le réseau Solana", generalError: "Une erreur est survenue. Réessayez.", processing: "Traitement…", completed: "Vérification terminée.", sent: "Transaction envoyée" },
    de: { ...english, brandTitle: "Solana-Gateway", brandSubtitle: "Direkte Zahlung über Solana", headerTrust: "Direkte Zahlung an das Empfängerkonto", languageLabel: "Sprache", loadingTitle: "Ihre Zahlung wird vorbereitet", loadingDetail: "Sichere Bestelldaten werden abgerufen…", errorTitle: "Diese Zahlung konnte nicht geöffnet werden", errorDetail: "Prüfen Sie, ob der Link vollständig ist, und versuchen Sie es erneut.", retry: "Erneut versuchen", summaryEyebrow: "Bestellübersicht", summaryTitle: "Zahlung abschließen", summaryIntro: "Das Projekt hat diese Zahlung mit Betrag und Beschreibung vorbereitet. Öffnen Sie Ihr Wallet, prüfen Sie die Angaben und bestätigen Sie nur bei Übereinstimmung.", project: "Projekt", concept: "Beschreibung", total: "Gesamt", securityTitle: "Ihr Wallet bleibt unter Ihrer Kontrolle", securityDetail: "Das Gateway fragt niemals nach Ihrer Wiederherstellungsphrase oder Ihrem privaten Schlüssel.", paymentOn: "Zahlen auf", qrLabel: "Zahlungs-QR-Code", qrHint: "Scannen Sie den QR-Code mit einem Solana-Pay-kompatiblen Wallet", pay: "Mit Phantom zahlen", openWallet: "Mit einem anderen kompatiblen Wallet öffnen", expires: "Dieser Link läuft ab in", technical: "Technische Zahlungsdetails anzeigen", recipient: "Empfängerkonto", copy: "Kopieren", signatureQuestion: "Bereits bezahlt und der Status ändert sich nicht?", signatureDescription: "Fügen Sie die öffentliche Transaktionssignatur ein, um sie erneut zu prüfen.", signaturePlaceholder: "Transaktionssignatur", verify: "Prüfen", footerIndependent: "Unabhängiges Solana-Gateway", footerVerified: "Zahlungen im Solana-Netzwerk verifiziert", generalError: "Ein Fehler ist aufgetreten. Bitte erneut versuchen.", processing: "Wird verarbeitet…", completed: "Prüfung abgeschlossen.", sent: "Transaktion gesendet" },
    ar: { ...english, brandTitle: "بوابة Solana", brandSubtitle: "دفع مباشر عبر Solana", headerTrust: "دفع مباشر إلى حساب المستلم", languageLabel: "اللغة", loadingTitle: "جارٍ إعداد دفعتك", loadingDetail: "جارٍ استرجاع تفاصيل الطلب الآمنة…", errorTitle: "تعذر فتح هذه الدفعة", errorDetail: "تحقق من اكتمال الرابط ثم حاول مرة أخرى.", retry: "إعادة المحاولة", summaryEyebrow: "ملخص الطلب", summaryTitle: "أكمل دفعتك", summaryIntro: "أعد المشروع هذه الدفعة بمبلغ ووصف محددين. افتح محفظتك وراجع البيانات ووافق فقط إذا كانت مطابقة.", project: "المشروع", concept: "الوصف", total: "الإجمالي", securityTitle: "تبقى محفظتك تحت سيطرتك", securityDetail: "لن تطلب البوابة أبداً عبارة الاسترداد أو المفتاح الخاص.", paymentOn: "الدفع على", qrLabel: "رمز QR للدفع", qrHint: "امسح رمز QR بمحفظة متوافقة مع Solana Pay", pay: "الدفع عبر Phantom", openWallet: "فتح بمحفظة متوافقة أخرى", expires: "تنتهي صلاحية هذا الرابط خلال", technical: "عرض التفاصيل التقنية للدفع", recipient: "حساب المستلم", copy: "نسخ", signatureQuestion: "هل دفعت بالفعل ولم تتغير الحالة؟", signatureDescription: "الصق توقيع المعاملة العام للتحقق منه مرة أخرى.", signaturePlaceholder: "توقيع المعاملة", verify: "تحقق", footerIndependent: "بوابة Solana مستقلة", footerVerified: "مدفوعات تم التحقق منها على شبكة Solana", generalError: "حدث خطأ. حاول مرة أخرى.", processing: "جارٍ المعالجة…", completed: "اكتمل التحقق.", sent: "تم إرسال المعاملة" },
    hi: { ...english, brandTitle: "Solana गेटवे", brandSubtitle: "Solana पर सीधा भुगतान", headerTrust: "प्राप्तकर्ता खाते में सीधा भुगतान", languageLabel: "भाषा", loadingTitle: "आपका भुगतान तैयार किया जा रहा है", loadingDetail: "ऑर्डर का सुरक्षित विवरण प्राप्त किया जा रहा है…", errorTitle: "यह भुगतान खोला नहीं जा सका", errorDetail: "लिंक पूरा है या नहीं जाँचें और फिर प्रयास करें।", retry: "फिर प्रयास करें", summaryEyebrow: "ऑर्डर सारांश", summaryTitle: "अपना भुगतान पूरा करें", summaryIntro: "प्रोजेक्ट ने यह भुगतान राशि और विवरण के साथ तैयार किया है। अपना वॉलेट खोलें, जानकारी देखें और केवल मिलान होने पर स्वीकृत करें।", project: "प्रोजेक्ट", concept: "विवरण", total: "कुल", securityTitle: "आपका वॉलेट आपके नियंत्रण में रहता है", securityDetail: "गेटवे कभी भी आपका रिकवरी वाक्यांश या निजी कुंजी नहीं मांगेगा।", paymentOn: "भुगतान करें", qrLabel: "भुगतान QR कोड", qrHint: "Solana Pay-संगत वॉलेट से QR स्कैन करें", pay: "Phantom से भुगतान करें", openWallet: "अन्य संगत वॉलेट से खोलें", expires: "यह लिंक समाप्त होगा", technical: "भुगतान के तकनीकी विवरण देखें", recipient: "प्राप्तकर्ता खाता", copy: "कॉपी", signatureQuestion: "भुगतान किया लेकिन स्थिति नहीं बदली?", signatureDescription: "फिर से जाँचने के लिए सार्वजनिक ट्रांज़ैक्शन हस्ताक्षर चिपकाएँ।", signaturePlaceholder: "ट्रांज़ैक्शन हस्ताक्षर", verify: "जाँचें", footerIndependent: "स्वतंत्र Solana गेटवे", footerVerified: "Solana नेटवर्क पर सत्यापित भुगतान", generalError: "एक त्रुटि हुई। फिर प्रयास करें।", processing: "प्रोसेस हो रहा है…", completed: "जाँच पूरी हुई।", sent: "ट्रांज़ैक्शन भेजा गया" },
    "zh-CN": { ...english, brandTitle: "Solana 支付网关", brandSubtitle: "在 Solana 上直接支付", headerTrust: "直接支付至收款账户", languageLabel: "语言", loadingTitle: "正在准备您的支付", loadingDetail: "正在获取安全的订单信息…", errorTitle: "无法打开此支付", errorDetail: "请检查链接是否完整，然后重试。", retry: "重试", summaryEyebrow: "订单摘要", summaryTitle: "完成您的支付", summaryIntro: "项目已设置好金额和说明。请打开钱包，核对信息，只有在一致时才确认。", project: "项目", concept: "说明", total: "总计", securityTitle: "您的钱包始终由您控制", securityDetail: "网关绝不会要求您的助记词或私钥。", paymentOn: "支付网络", qrLabel: "支付二维码", qrHint: "使用兼容 Solana Pay 的钱包扫描二维码", pay: "使用 Phantom 支付", openWallet: "使用其他兼容钱包打开", expires: "此链接将在以下时间后失效", technical: "查看支付技术详情", recipient: "收款账户", copy: "复制", signatureQuestion: "已付款但状态没有变化？", signatureDescription: "粘贴公开交易签名以再次验证。", signaturePlaceholder: "交易签名", verify: "验证", footerIndependent: "独立 Solana 支付网关", footerVerified: "在 Solana 网络上验证的支付", generalError: "发生错误，请重试。", processing: "正在处理…", completed: "检查已完成。", sent: "交易已发送" },
    ja: { ...english, brandTitle: "Solana ゲートウェイ", brandSubtitle: "Solana で直接支払い", headerTrust: "受取口座への直接支払い", languageLabel: "言語", loadingTitle: "お支払いを準備しています", loadingDetail: "安全な注文情報を取得しています…", errorTitle: "この支払いを開けませんでした", errorDetail: "リンクが完全であることを確認して、もう一度お試しください。", retry: "再試行", summaryEyebrow: "注文の概要", summaryTitle: "支払いを完了", summaryIntro: "プロジェクトは金額と説明を含むこの支払いを準備しました。ウォレットを開き、内容を確認して一致する場合のみ承認してください。", project: "プロジェクト", concept: "説明", total: "合計", securityTitle: "ウォレットはあなたの管理下にあります", securityDetail: "ゲートウェイがリカバリーフレーズや秘密鍵を求めることはありません。", paymentOn: "支払い先", qrLabel: "支払い QR コード", qrHint: "Solana Pay 対応ウォレットで QR コードを読み取ってください", pay: "Phantom で支払う", openWallet: "別の対応ウォレットで開く", expires: "このリンクの有効期限", technical: "支払いの技術的な詳細を表示", recipient: "受取口座", copy: "コピー", signatureQuestion: "支払い済みなのに状態が変わりませんか？", signatureDescription: "公開トランザクション署名を貼り付けて再確認してください。", signaturePlaceholder: "トランザクション署名", verify: "確認", footerIndependent: "独立した Solana ゲートウェイ", footerVerified: "Solana ネットワークで検証された支払い", generalError: "エラーが発生しました。もう一度お試しください。", processing: "処理中…", completed: "確認が完了しました。", sent: "トランザクションを送信しました" },
    ko: { ...english, brandTitle: "Solana 게이트웨이", brandSubtitle: "Solana에서 직접 결제", headerTrust: "수취 계정으로 직접 결제", languageLabel: "언어", loadingTitle: "결제를 준비하고 있습니다", loadingDetail: "안전한 주문 정보를 불러오는 중…", errorTitle: "이 결제를 열 수 없습니다", errorDetail: "링크가 완전한지 확인한 후 다시 시도하세요.", retry: "다시 시도", summaryEyebrow: "주문 요약", summaryTitle: "결제를 완료하세요", summaryIntro: "프로젝트가 금액과 설명이 정해진 결제를 준비했습니다. 지갑을 열어 내용을 확인하고 일치할 때만 승인하세요.", project: "프로젝트", concept: "설명", total: "합계", securityTitle: "지갑은 항상 사용자가 제어합니다", securityDetail: "게이트웨이는 복구 문구나 개인 키를 절대 요청하지 않습니다.", paymentOn: "결제 네트워크", qrLabel: "결제 QR 코드", qrHint: "Solana Pay 호환 지갑으로 QR 코드를 스캔하세요", pay: "Phantom으로 결제", openWallet: "다른 호환 지갑으로 열기", expires: "이 링크는 다음 시간 후 만료됩니다", technical: "결제 기술 정보 보기", recipient: "수취 계정", copy: "복사", signatureQuestion: "이미 결제했지만 상태가 바뀌지 않나요?", signatureDescription: "공개 거래 서명을 붙여 넣어 다시 확인하세요.", signaturePlaceholder: "거래 서명", verify: "확인", footerIndependent: "독립 Solana 게이트웨이", footerVerified: "Solana 네트워크에서 검증된 결제", generalError: "오류가 발생했습니다. 다시 시도하세요.", processing: "처리 중…", completed: "확인이 완료되었습니다.", sent: "거래가 전송되었습니다" },
  };

  const localizedStatuses = {
    pt: { "status.CREATED.title": "Preparando pagamento", "status.CREATED.detail": "Estamos preparando seu pedido.", "status.PENDING.title": "Aguardando pagamento", "status.PENDING.detail": "Abra sua carteira e confirme os dados do pagamento.", "status.DETECTED.title": "Pagamento detectado", "status.DETECTED.detail": "Estamos verificando a transação na Solana.", "status.CONFIRMING.title": "Confirmando pagamento", "status.CONFIRMING.detail": "A rede está confirmando a transação.", "status.CONFIRMED.title": "Pagamento confirmado", "status.CONFIRMED.detail": "O pagamento foi verificado com sucesso.", "status.EXPIRED.title": "Link expirado", "status.EXPIRED.detail": "Este pedido não aceita mais novos pagamentos.", "status.FAILED.title": "Pagamento não confirmado", "status.FAILED.detail": "Não foi possível verificar uma transação válida.", "status.MANUAL_REVIEW.title": "Pagamento requer revisão", "status.MANUAL_REVIEW.detail": "Este pagamento requer revisão manual.", "status.UNKNOWN.title": "Verificando status", "status.UNKNOWN.detail": "Estamos verificando seu pedido." },
    fr: { "status.CREATED.title": "Préparation du paiement", "status.CREATED.detail": "Nous préparons votre commande.", "status.PENDING.title": "En attente du paiement", "status.PENDING.detail": "Ouvrez votre wallet et confirmez les données du paiement.", "status.DETECTED.title": "Paiement détecté", "status.DETECTED.detail": "Nous vérifions la transaction sur Solana.", "status.CONFIRMING.title": "Confirmation du paiement", "status.CONFIRMING.detail": "Le réseau confirme la transaction.", "status.CONFIRMED.title": "Paiement confirmé", "status.CONFIRMED.detail": "Le paiement a été vérifié avec succès.", "status.EXPIRED.title": "Lien expiré", "status.EXPIRED.detail": "Cette commande n'accepte plus de nouveaux paiements.", "status.FAILED.title": "Paiement non confirmé", "status.FAILED.detail": "Une transaction valide n'a pas pu être vérifiée.", "status.MANUAL_REVIEW.title": "Paiement à examiner", "status.MANUAL_REVIEW.detail": "Ce paiement nécessite un examen manuel.", "status.UNKNOWN.title": "Vérification du statut", "status.UNKNOWN.detail": "Nous vérifions votre commande." },
    de: { "status.CREATED.title": "Zahlung wird vorbereitet", "status.CREATED.detail": "Wir bereiten Ihre Bestellung vor.", "status.PENDING.title": "Zahlung wird erwartet", "status.PENDING.detail": "Öffnen Sie Ihr Wallet und bestätigen Sie die Zahlungsdaten.", "status.DETECTED.title": "Zahlung erkannt", "status.DETECTED.detail": "Wir prüfen die Transaktion auf Solana.", "status.CONFIRMING.title": "Zahlung wird bestätigt", "status.CONFIRMING.detail": "Das Netzwerk bestätigt die Transaktion.", "status.CONFIRMED.title": "Zahlung bestätigt", "status.CONFIRMED.detail": "Die Zahlung wurde erfolgreich verifiziert.", "status.EXPIRED.title": "Link abgelaufen", "status.EXPIRED.detail": "Diese Bestellung akzeptiert keine neuen Zahlungen mehr.", "status.FAILED.title": "Zahlung konnte nicht bestätigt werden", "status.FAILED.detail": "Eine gültige Transaktion konnte nicht verifiziert werden.", "status.MANUAL_REVIEW.title": "Zahlung muss geprüft werden", "status.MANUAL_REVIEW.detail": "Diese Zahlung erfordert eine manuelle Prüfung.", "status.UNKNOWN.title": "Status wird geprüft", "status.UNKNOWN.detail": "Wir prüfen Ihre Bestellung." },
    ar: { "status.CREATED.title": "جارٍ إعداد الدفع", "status.CREATED.detail": "نحن نعد طلبك.", "status.PENDING.title": "بانتظار الدفع", "status.PENDING.detail": "افتح محفظتك وأكد تفاصيل الدفع.", "status.DETECTED.title": "تم اكتشاف الدفع", "status.DETECTED.detail": "نحن نتحقق من المعاملة على Solana.", "status.CONFIRMING.title": "جارٍ تأكيد الدفع", "status.CONFIRMING.detail": "تؤكد الشبكة المعاملة.", "status.CONFIRMED.title": "تم تأكيد الدفع", "status.CONFIRMED.detail": "تم التحقق من الدفع بنجاح.", "status.EXPIRED.title": "انتهت صلاحية الرابط", "status.EXPIRED.detail": "لم يعد هذا الطلب يقبل دفعات جديدة.", "status.FAILED.title": "تعذر تأكيد الدفع", "status.FAILED.detail": "تعذر التحقق من معاملة صالحة.", "status.MANUAL_REVIEW.title": "الدفع يحتاج إلى مراجعة", "status.MANUAL_REVIEW.detail": "يتطلب هذا الدفع مراجعة يدوية.", "status.UNKNOWN.title": "جارٍ التحقق من الحالة", "status.UNKNOWN.detail": "نحن نتحقق من طلبك." },
    hi: { "status.CREATED.title": "भुगतान तैयार हो रहा है", "status.CREATED.detail": "हम आपका ऑर्डर तैयार कर रहे हैं।", "status.PENDING.title": "भुगतान की प्रतीक्षा", "status.PENDING.detail": "अपना वॉलेट खोलें और भुगतान विवरण की पुष्टि करें।", "status.DETECTED.title": "भुगतान मिला", "status.DETECTED.detail": "हम Solana पर ट्रांज़ैक्शन जाँच रहे हैं।", "status.CONFIRMING.title": "भुगतान की पुष्टि हो रही है", "status.CONFIRMING.detail": "नेटवर्क ट्रांज़ैक्शन की पुष्टि कर रहा है।", "status.CONFIRMED.title": "भुगतान की पुष्टि हुई", "status.CONFIRMED.detail": "भुगतान सफलतापूर्वक सत्यापित हो गया है।", "status.EXPIRED.title": "लिंक समाप्त हो गया", "status.EXPIRED.detail": "यह ऑर्डर अब नए भुगतान स्वीकार नहीं करता।", "status.FAILED.title": "भुगतान की पुष्टि नहीं हुई", "status.FAILED.detail": "मान्य ट्रांज़ैक्शन सत्यापित नहीं हो सका।", "status.MANUAL_REVIEW.title": "भुगतान की समीक्षा आवश्यक है", "status.MANUAL_REVIEW.detail": "इस भुगतान को मैन्युअल समीक्षा चाहिए।", "status.UNKNOWN.title": "स्थिति जाँची जा रही है", "status.UNKNOWN.detail": "हम आपका ऑर्डर जाँच रहे हैं।" },
    "zh-CN": { "status.CREATED.title": "正在准备支付", "status.CREATED.detail": "我们正在准备您的订单。", "status.PENDING.title": "等待支付", "status.PENDING.detail": "请打开钱包并确认支付信息。", "status.DETECTED.title": "已检测到支付", "status.DETECTED.detail": "我们正在 Solana 上检查交易。", "status.CONFIRMING.title": "正在确认支付", "status.CONFIRMING.detail": "网络正在确认交易。", "status.CONFIRMED.title": "支付已确认", "status.CONFIRMED.detail": "支付已成功验证。", "status.EXPIRED.title": "链接已失效", "status.EXPIRED.detail": "该订单不再接受新的支付。", "status.FAILED.title": "无法确认支付", "status.FAILED.detail": "无法验证有效交易。", "status.MANUAL_REVIEW.title": "支付需要审核", "status.MANUAL_REVIEW.detail": "该支付需要人工审核。", "status.UNKNOWN.title": "正在检查状态", "status.UNKNOWN.detail": "我们正在检查您的订单。" },
    ja: { "status.CREATED.title": "支払いを準備中", "status.CREATED.detail": "注文を準備しています。", "status.PENDING.title": "支払い待ち", "status.PENDING.detail": "ウォレットを開き、支払い内容を確認してください。", "status.DETECTED.title": "支払いを検出", "status.DETECTED.detail": "Solana でトランザクションを確認しています。", "status.CONFIRMING.title": "支払いを確認中", "status.CONFIRMING.detail": "ネットワークがトランザクションを確認しています。", "status.CONFIRMED.title": "支払いを確認しました", "status.CONFIRMED.detail": "支払いは正常に検証されました。", "status.EXPIRED.title": "リンクの有効期限切れ", "status.EXPIRED.detail": "この注文は新しい支払いを受け付けません。", "status.FAILED.title": "支払いを確認できません", "status.FAILED.detail": "有効なトランザクションを検証できませんでした。", "status.MANUAL_REVIEW.title": "支払いの確認が必要", "status.MANUAL_REVIEW.detail": "この支払いには手動確認が必要です。", "status.UNKNOWN.title": "状態を確認中", "status.UNKNOWN.detail": "注文を確認しています。" },
    ko: { "status.CREATED.title": "결제 준비 중", "status.CREATED.detail": "주문을 준비하고 있습니다.", "status.PENDING.title": "결제 대기 중", "status.PENDING.detail": "지갑을 열고 결제 정보를 확인하세요.", "status.DETECTED.title": "결제 감지됨", "status.DETECTED.detail": "Solana에서 거래를 확인하고 있습니다.", "status.CONFIRMING.title": "결제 확인 중", "status.CONFIRMING.detail": "네트워크가 거래를 확인하고 있습니다.", "status.CONFIRMED.title": "결제 확인됨", "status.CONFIRMED.detail": "결제가 성공적으로 검증되었습니다.", "status.EXPIRED.title": "링크 만료됨", "status.EXPIRED.detail": "이 주문은 더 이상 새 결제를 받을 수 없습니다.", "status.FAILED.title": "결제를 확인할 수 없음", "status.FAILED.detail": "유효한 거래를 검증할 수 없습니다.", "status.MANUAL_REVIEW.title": "결제 검토 필요", "status.MANUAL_REVIEW.detail": "이 결제는 수동 검토가 필요합니다.", "status.UNKNOWN.title": "상태 확인 중", "status.UNKNOWN.detail": "주문을 확인하고 있습니다." },
  };
  for (const [locale, values] of Object.entries(localizedStatuses)) Object.assign(localized[locale], values);
  Object.assign(english, {
  "brandLogoAlt": "RolemIAster logo",
  "genericPaymentTitle": "Payment request",
  "genericPaymentDescription": "Complete your payment securely on Solana.",
  "projectLogoAlt": "Logo of {project}"
});
  const localizedExtras = Object.freeze({
  "es": {
    "brandLogoAlt": "Logotipo de RolemIAster",
    "genericPaymentTitle": "Solicitud de pago",
    "genericPaymentDescription": "Completa el pago de forma segura en Solana.",
    "projectLogoAlt": "Logotipo de {project}",
    "reference": "Referencia única"
  },
  "ru": {
    "brandLogoAlt": "Логотип RolemIAster",
    "genericPaymentTitle": "Запрос на оплату",
    "genericPaymentDescription": "Безопасно завершите платёж в Solana.",
    "projectLogoAlt": "Логотип {project}",
    "siteDescription": "Безопасная прямая оплата в сети Solana.",
    "reference": "Уникальная ссылка",
    "mint": "Mint актива",
    "noMint": "Не применяется к SOL",
    "qrFallback": "Не удалось сгенерировать QR-код. Используйте кнопку, чтобы открыть кошелёк.",
    "explorer": "Открыть транзакцию в Solana Explorer",
    "retrying": "Не удалось обновить статус. Мы попробуем снова автоматически.",
    "signatureEmpty": "Введите подпись для проверки.",
    "walletUnavailable": "Phantom недоступен в этом браузере. Используйте QR-код или альтернативную ссылку.",
    "walletReview": "Подключённый счёт: {address}. Проверьте сумму, актив и сеть в Phantom.",
    "walletSent": "Транзакция отправлена. Мы проверяем её в Solana…",
    "walletCancelled": "Вы отменили операцию в Phantom."
  },
  "it": {
    "brandLogoAlt": "Logo di RolemIAster",
    "genericPaymentTitle": "Richiesta di pagamento",
    "genericPaymentDescription": "Completa il pagamento in modo sicuro su Solana.",
    "projectLogoAlt": "Logo di {project}",
    "siteDescription": "Checkout sicuro e diretto sulla rete Solana.",
    "reference": "Riferimento univoco",
    "mint": "Mint dell’asset",
    "productFallback": "Pagamento sicuro su Solana.",
    "noMint": "Non applicabile a SOL",
    "qrFallback": "Non è stato possibile generare il QR. Usa il pulsante per aprire il wallet.",
    "explorer": "Visualizza la transazione in Solana Explorer",
    "copied": "Copiato negli appunti",
    "copyFailed": "Impossibile copiare",
    "retrying": "Non è stato possibile aggiornare lo stato. Riproveremo automaticamente.",
    "signatureEmpty": "Inserisci una firma da verificare.",
    "walletUnavailable": "Phantom non è disponibile in questo browser. Puoi usare il QR o il link alternativo.",
    "walletReview": "Conto connesso: {address}. Controlla importo, asset e rete in Phantom.",
    "walletSent": "Transazione inviata. La stiamo verificando su Solana…",
    "walletCancelled": "Hai annullato l’operazione in Phantom."
  },
  "pt": {
    "brandLogoAlt": "Logótipo do RolemIAster",
    "genericPaymentTitle": "Pedido de pagamento",
    "genericPaymentDescription": "Conclua o pagamento com segurança na Solana.",
    "projectLogoAlt": "Logótipo de {project}",
    "siteTitle": "Pagamento seguro · Gateway Solana",
    "siteDescription": "Checkout seguro e direto na rede Solana.",
    "total": "Total",
    "reference": "Referência única",
    "mint": "Mint do ativo",
    "productFallback": "Pagamento seguro na Solana.",
    "noMint": "Não se aplica a SOL",
    "qrFallback": "Não foi possível gerar o QR. Use o botão para abrir a carteira.",
    "explorer": "Ver transação no Solana Explorer",
    "copied": "Copiado para a área de transferência",
    "copyFailed": "Não foi possível copiar",
    "retrying": "Não foi possível atualizar o estado. Tentaremos novamente automaticamente.",
    "signatureEmpty": "Introduza uma assinatura para verificar.",
    "walletUnavailable": "O Phantom não está disponível neste navegador. Pode usar o QR ou a ligação alternativa.",
    "walletReview": "Conta ligada: {address}. Reveja o montante, ativo e rede no Phantom.",
    "walletSent": "Transação enviada. Estamos a verificá-la na Solana…",
    "walletCancelled": "Cancelou a operação no Phantom."
  },
  "fr": {
    "brandLogoAlt": "Logo RolemIAster",
    "genericPaymentTitle": "Demande de paiement",
    "genericPaymentDescription": "Finalisez votre paiement en toute sécurité sur Solana.",
    "projectLogoAlt": "Logo de {project}",
    "siteTitle": "Paiement sécurisé · Passerelle Solana",
    "siteDescription": "Checkout sécurisé et direct sur le réseau Solana.",
    "concept": "Description",
    "total": "Total",
    "reference": "Référence unique",
    "mint": "Mint de l’actif",
    "productFallback": "Paiement sécurisé sur Solana.",
    "noMint": "Non applicable à SOL",
    "qrFallback": "Le QR n’a pas pu être généré. Utilisez le bouton pour ouvrir votre portefeuille.",
    "explorer": "Voir la transaction dans Solana Explorer",
    "copied": "Copié dans le presse-papiers",
    "copyFailed": "Impossible de copier",
    "retrying": "Nous n’avons pas pu mettre à jour le statut. Nous réessaierons automatiquement.",
    "signatureEmpty": "Saisissez une signature à vérifier.",
    "walletUnavailable": "Phantom n’est pas disponible dans ce navigateur. Utilisez le QR ou le lien alternatif.",
    "walletReview": "Compte connecté : {address}. Vérifiez le montant, l’actif et le réseau dans Phantom.",
    "walletSent": "Transaction envoyée. Nous la vérifions sur Solana…",
    "walletCancelled": "Vous avez annulé l’opération dans Phantom."
  },
  "de": {
    "brandLogoAlt": "RolemIAster-Logo",
    "genericPaymentTitle": "Zahlungsanforderung",
    "genericPaymentDescription": "Schließen Sie Ihre Zahlung sicher über Solana ab.",
    "projectLogoAlt": "Logo von {project}",
    "siteTitle": "Sichere Zahlung · Solana-Gateway",
    "siteDescription": "Sicherer, direkter Checkout im Solana-Netzwerk.",
    "reference": "Eindeutige Referenz",
    "mint": "Asset-Mint",
    "productFallback": "Sichere Zahlung über Solana.",
    "noMint": "Nicht für SOL anwendbar",
    "qrFallback": "Der QR-Code konnte nicht erzeugt werden. Öffnen Sie Ihre Wallet über die Schaltfläche.",
    "explorer": "Transaktion im Solana Explorer anzeigen",
    "copied": "In die Zwischenablage kopiert",
    "copyFailed": "Kopieren nicht möglich",
    "retrying": "Der Status konnte nicht aktualisiert werden. Wir versuchen es automatisch erneut.",
    "signatureEmpty": "Geben Sie eine Signatur zur Prüfung ein.",
    "walletUnavailable": "Phantom ist in diesem Browser nicht verfügbar. Sie können den QR-Code oder den alternativen Link verwenden.",
    "walletReview": "Verbundenes Konto: {address}. Prüfen Sie Betrag, Asset und Netzwerk in Phantom.",
    "walletSent": "Transaktion gesendet. Wir prüfen sie auf Solana…",
    "walletCancelled": "Sie haben den Vorgang in Phantom abgebrochen."
  },
  "ar": {
    "brandLogoAlt": "شعار RolemIAster",
    "genericPaymentTitle": "طلب دفع",
    "genericPaymentDescription": "أكمل دفعتك بأمان عبر Solana.",
    "projectLogoAlt": "شعار {project}",
    "siteTitle": "دفع آمن · بوابة Solana",
    "siteDescription": "صفحة دفع آمنة ومباشرة على شبكة Solana.",
    "reference": "مرجع فريد",
    "mint": "Mint الأصل",
    "productFallback": "دفع آمن عبر Solana.",
    "noMint": "لا ينطبق على SOL",
    "qrFallback": "تعذر إنشاء رمز QR. استخدم الزر لفتح محفظتك.",
    "explorer": "عرض المعاملة في Solana Explorer",
    "copied": "تم النسخ إلى الحافظة",
    "copyFailed": "تعذر النسخ",
    "retrying": "تعذر تحديث الحالة. سنحاول مرة أخرى تلقائياً.",
    "signatureEmpty": "أدخل توقيعاً للتحقق منه.",
    "walletUnavailable": "Phantom غير متاح في هذا المتصفح. يمكنك استخدام رمز QR أو الرابط البديل.",
    "walletReview": "الحساب المتصل: {address}. راجع المبلغ والأصل والشبكة في Phantom.",
    "walletSent": "تم إرسال المعاملة. نحن نتحقق منها على Solana…",
    "walletCancelled": "لقد ألغيت العملية في Phantom."
  },
  "hi": {
    "brandLogoAlt": "RolemIAster लोगो",
    "genericPaymentTitle": "भुगतान अनुरोध",
    "genericPaymentDescription": "Solana पर अपना भुगतान सुरक्षित रूप से पूरा करें।",
    "projectLogoAlt": "{project} का लोगो",
    "siteTitle": "सुरक्षित भुगतान · Solana गेटवे",
    "siteDescription": "Solana नेटवर्क पर सुरक्षित और प्रत्यक्ष चेकआउट।",
    "reference": "विशिष्ट संदर्भ",
    "mint": "एसेट मिंट",
    "productFallback": "Solana पर सुरक्षित भुगतान।",
    "noMint": "SOL पर लागू नहीं",
    "qrFallback": "QR कोड नहीं बनाया जा सका। अपना वॉलेट खोलने के लिए बटन का उपयोग करें।",
    "explorer": "Solana Explorer में लेन-देन देखें",
    "copied": "क्लिपबोर्ड पर कॉपी किया गया",
    "copyFailed": "कॉपी नहीं किया जा सका",
    "retrying": "स्थिति अपडेट नहीं हो सकी। हम अपने आप फिर कोशिश करेंगे।",
    "signatureEmpty": "जाँचने के लिए हस्ताक्षर दर्ज करें।",
    "walletUnavailable": "इस ब्राउज़र में Phantom उपलब्ध नहीं है। आप QR कोड या वैकल्पिक लिंक का उपयोग कर सकते हैं।",
    "walletReview": "कनेक्ट किया गया खाता: {address}. Phantom में राशि, एसेट और नेटवर्क जाँचें।",
    "walletSent": "लेन-देन भेजा गया। हम इसे Solana पर सत्यापित कर रहे हैं…",
    "walletCancelled": "आपने Phantom में प्रक्रिया रद्द कर दी।"
  },
  "zh-CN": {
    "brandLogoAlt": "RolemIAster 标志",
    "genericPaymentTitle": "付款请求",
    "genericPaymentDescription": "请在 Solana 上安全完成付款。",
    "projectLogoAlt": "{project} 标志",
    "siteTitle": "安全支付 · Solana 网关",
    "siteDescription": "在 Solana 网络上的安全直接结账。",
    "reference": "唯一参考",
    "mint": "资产 Mint",
    "productFallback": "在 Solana 上安全支付。",
    "noMint": "不适用于 SOL",
    "qrFallback": "无法生成二维码。请使用按钮打开钱包。",
    "explorer": "在 Solana Explorer 中查看交易",
    "copied": "已复制到剪贴板",
    "copyFailed": "无法复制",
    "retrying": "无法更新状态，我们将自动重试。",
    "signatureEmpty": "请输入要核验的签名。",
    "walletUnavailable": "此浏览器中无法使用 Phantom。您可以使用二维码或备用链接。",
    "walletReview": "已连接账户：{address}。请在 Phantom 中核对金额、资产和网络。",
    "walletSent": "交易已发送。我们正在 Solana 上核验…",
    "walletCancelled": "您已在 Phantom 中取消操作。"
  },
  "ja": {
    "brandLogoAlt": "RolemIAster のロゴ",
    "genericPaymentTitle": "支払いリクエスト",
    "genericPaymentDescription": "Solana で安全に支払いを完了してください。",
    "projectLogoAlt": "{project} のロゴ",
    "siteTitle": "安全な支払い · Solana ゲートウェイ",
    "siteDescription": "Solana ネットワーク上の安全で直接的なチェックアウトです。",
    "reference": "一意の参照",
    "mint": "資産の Mint",
    "productFallback": "Solana での安全な支払い。",
    "noMint": "SOL には適用されません",
    "qrFallback": "QR コードを生成できませんでした。ボタンを使ってウォレットを開いてください。",
    "explorer": "Solana Explorer でトランザクションを表示",
    "copied": "クリップボードにコピーしました",
    "copyFailed": "コピーできませんでした",
    "retrying": "状態を更新できませんでした。自動的に再試行します。",
    "signatureEmpty": "確認する署名を入力してください。",
    "walletUnavailable": "このブラウザでは Phantom を利用できません。QR コードまたは代替リンクを使用できます。",
    "walletReview": "接続済みアカウント: {address}。Phantom で金額、資産、ネットワークを確認してください。",
    "walletSent": "トランザクションを送信しました。Solana で確認しています…",
    "walletCancelled": "Phantom で操作をキャンセルしました。"
  },
  "ko": {
    "brandLogoAlt": "RolemIAster 로고",
    "genericPaymentTitle": "결제 요청",
    "genericPaymentDescription": "Solana에서 안전하게 결제를 완료하세요.",
    "projectLogoAlt": "{project} 로고",
    "siteTitle": "안전한 결제 · Solana 게이트웨이",
    "siteDescription": "Solana 네트워크에서 안전하고 직접적인 결제를 제공합니다.",
    "reference": "고유 참조",
    "mint": "자산 Mint",
    "productFallback": "Solana에서 안전하게 결제하세요.",
    "noMint": "SOL에는 적용되지 않음",
    "qrFallback": "QR 코드를 생성할 수 없습니다. 버튼을 사용해 지갑을 여세요.",
    "explorer": "Solana Explorer에서 거래 보기",
    "copied": "클립보드에 복사됨",
    "copyFailed": "복사할 수 없음",
    "retrying": "상태를 업데이트할 수 없습니다. 자동으로 다시 시도합니다.",
    "signatureEmpty": "확인할 서명을 입력하세요.",
    "walletUnavailable": "이 브라우저에서는 Phantom을 사용할 수 없습니다. QR 코드 또는 대체 링크를 사용할 수 있습니다.",
    "walletReview": "연결된 계정: {address}. Phantom에서 금액, 자산, 네트워크를 확인하세요.",
    "walletSent": "거래가 전송되었습니다. Solana에서 확인 중입니다…",
    "walletCancelled": "Phantom에서 작업을 취소했습니다."
  }
});
  for (const [locale, values] of Object.entries(localizedExtras)) Object.assign(localized[locale], values);
  const intentionallySharedTranslations = Object.freeze({
    es: new Set(["total"]),
    pt: new Set(["total"]),
    fr: new Set(["concept", "total"]),
  });

  function normalizeLocale(value) {
    if (typeof value !== "string") return null;
    const normalized = value.trim().replaceAll("_", "-").toLowerCase();
    if (aliases[normalized]) return aliases[normalized];
    const exact = supportedLocaleCodes.find((candidate) => candidate.toLowerCase() === normalized);
    if (exact) return exact;
    const primary = normalized.split("-")[0];
    return supportedLocaleCodes.includes(primary) ? primary : null;
  }
  function resolveLocale({ query = "", savedLocale = null, browserLanguages = [] }) {
    const requested = normalizeLocale(new URLSearchParams(query).get("lang"));
    if (requested) return requested;
    const saved = normalizeLocale(savedLocale);
    if (saved) return saved;
    for (const browserLocale of browserLanguages) { const detected = normalizeLocale(browserLocale); if (detected) return detected; }
    return "en";
  }
  const keyAliases = Object.freeze({ "action.payWithPhantom": "pay" });
  function translate(locale, key, values = {}) {
    const resolvedKey = keyAliases[key] ?? key;
    const template = localized[normalizeLocale(locale) || "en"]?.[resolvedKey] ?? english[resolvedKey] ?? key;
    return template.replace(/\{([a-zA-Z0-9_]+)\}/g, (_, name) => String(values[name] ?? ""));
  }
  function direction(locale) { return normalizeLocale(locale) === "ar" ? "rtl" : "ltr"; }
  function missingOwnKeys(locale) {
    const resolved = normalizeLocale(locale) || "en";
    if (resolved === "en") return [];
    const dictionary = localized[resolved] ?? {};
    const shared = intentionallySharedTranslations[resolved] ?? new Set();
    return Object.keys(english).filter((key) => (
      typeof dictionary[key] !== "string"
      || dictionary[key].trim() === ""
      || (dictionary[key] === english[key] && !shared.has(key))
    ));
  }
  function missingKeys(locale) { return missingOwnKeys(locale); }

  function resolveCheckoutContent(content, locale) {
    const resolved = normalizeLocale(locale);
    if (!resolved || typeof content !== "object" || content === null || Array.isArray(content)) return null;
    const candidate = content[resolved];
    if (typeof candidate !== "object" || candidate === null || Array.isArray(candidate)) return null;
    if (typeof candidate.title !== "string" || typeof candidate.description !== "string") return null;
    return { title: candidate.title, description: candidate.description };
  }
  function applyDocument(doc, locale) {
    const resolved = normalizeLocale(locale) || "en";
    doc.documentElement.lang = resolved; doc.documentElement.dir = direction(resolved);
    for (const node of doc.querySelectorAll("[data-i18n]")) node.textContent = translate(resolved, node.dataset.i18n);
    for (const node of doc.querySelectorAll("[data-i18n-content]")) node.setAttribute("content", translate(resolved, node.dataset.i18nContent));
    for (const node of doc.querySelectorAll("[data-i18n-placeholder]")) node.setAttribute("placeholder", translate(resolved, node.dataset.i18nPlaceholder));
    for (const node of doc.querySelectorAll("[data-i18n-aria-label]")) node.setAttribute("aria-label", translate(resolved, node.dataset.i18nAriaLabel));
    for (const node of doc.querySelectorAll("[data-i18n-alt]")) node.setAttribute("alt", translate(resolved, node.dataset.i18nAlt));
    doc.title = translate(resolved, "siteTitle");
  }
  window.PaymentI18n = Object.freeze({ supportedLocaleCodes, requiredKeys: Object.freeze(Object.keys(english)), resolveLocale, direction, translate, missingKeys, missingOwnKeys, resolveCheckoutContent, applyDocument });
})();

(() => {
  "use strict";
  const base = window.PaymentI18n;
  const messages = Object.freeze({
    es: { entryErrorTitle: "No se ha podido abrir la página de pago", entryInvalidLink: "El enlace de pago no es válido", entryUnsupportedField: "El enlace contiene un parámetro que la pasarela no admite.", entryDuplicateField: "El enlace contiene un parámetro repetido.", entryMissingFields: "El enlace no incluye todos los datos necesarios para el cobro.", entryNetwork: "La red indicada en el enlace no está admitida.", entryLocalized: "El contenido localizado del enlace no es válido.", entryRead: "No se han podido leer los datos del enlace.", entryIdleTitle: "Pasarela Solana", entryIdleDescription: "Los cobros se abren desde una aplicación o enlace de pago. Sus datos no se pueden editar aquí.", entryIdleState: "No hay ningún pago pendiente", entryIdleStatus: "Esta página no permite crear ni modificar cobros manualmente.", entryOpeningDescription: "Los datos del cobro ya están fijados por la aplicación o enlace que lo abrió.", entryOpeningState: "Abriendo la página de pago", entryOpeningStatus: "La pasarela está validando la ruta de pago autorizada." },
    en: { entryErrorTitle: "The payment page could not be opened", entryInvalidLink: "The payment link is invalid", entryUnsupportedField: "The link contains a parameter that the gateway does not support.", entryDuplicateField: "The link contains a repeated parameter.", entryMissingFields: "The link does not include all the information required for the payment.", entryNetwork: "The network specified in the link is not supported.", entryLocalized: "The localized content in the link is invalid.", entryRead: "The information in the link could not be read.", entryIdleTitle: "Solana Gateway", entryIdleDescription: "Payments are opened from an application or payment link. Their information cannot be edited here.", entryIdleState: "There is no pending checkout", entryIdleStatus: "This page does not allow payments to be created or modified manually.", entryOpeningDescription: "The payment information has already been set by the application or link that opened it.", entryOpeningState: "Opening checkout", entryOpeningStatus: "The gateway is validating the authorized payment route." },
    ru: { entryErrorTitle: "Не удалось открыть страницу оплаты", entryInvalidLink: "Недействительная ссылка на оплату", entryUnsupportedField: "Ссылка содержит параметр, который не поддерживается платёжным шлюзом.", entryDuplicateField: "Ссылка содержит повторяющийся параметр.", entryMissingFields: "В ссылке отсутствуют необходимые данные для оплаты.", entryNetwork: "Указанная в ссылке сеть не поддерживается.", entryLocalized: "Локализованное содержимое ссылки недействительно.", entryRead: "Не удалось прочитать данные ссылки.", entryIdleTitle: "Шлюз Solana", entryIdleDescription: "Платежи открываются из приложения или платёжной ссылки. Здесь нельзя изменять их данные.", entryIdleState: "Нет ожидающего оформления платежа", entryIdleStatus: "На этой странице нельзя вручную создавать или изменять платежи.", entryOpeningDescription: "Данные платежа уже заданы приложением или ссылкой.", entryOpeningState: "Открытие страницы оплаты", entryOpeningStatus: "Шлюз проверяет разрешённый маршрут платежа." },
    it: { entryErrorTitle: "Impossibile aprire la pagina di pagamento", entryInvalidLink: "Il link di pagamento non è valido", entryUnsupportedField: "Il link contiene un parametro non ammesso dal gateway.", entryDuplicateField: "Il link contiene un parametro ripetuto.", entryMissingFields: "Il link non include tutti i dati necessari per il pagamento.", entryNetwork: "La rete indicata nel link non è supportata.", entryLocalized: "Il contenuto localizzato del link non è valido.", entryRead: "Impossibile leggere i dati del link.", entryIdleTitle: "Gateway Solana", entryIdleDescription: "I pagamenti vengono aperti da un'applicazione o da un link di pagamento. I dati non possono essere modificati qui.", entryIdleState: "Nessun checkout in attesa", entryIdleStatus: "Questa pagina non consente di creare o modificare pagamenti manualmente.", entryOpeningDescription: "I dati del pagamento sono già stati definiti dall'applicazione o dal link.", entryOpeningState: "Apertura del checkout", entryOpeningStatus: "Il gateway sta verificando il percorso di pagamento autorizzato." },
    pt: { entryErrorTitle: "Não foi possível abrir a página de pagamento", entryInvalidLink: "O link de pagamento não é válido", entryUnsupportedField: "O link contém um parâmetro não permitido pelo gateway.", entryDuplicateField: "O link contém um parâmetro repetido.", entryMissingFields: "O link não inclui todos os dados necessários para o pagamento.", entryNetwork: "A rede indicada no link não é suportada.", entryLocalized: "O conteúdo localizado do link não é válido.", entryRead: "Não foi possível ler os dados do link.", entryIdleTitle: "Gateway Solana", entryIdleDescription: "Os pagamentos são abertos por uma aplicação ou link de pagamento. Os dados não podem ser editados aqui.", entryIdleState: "Não existe checkout pendente", entryIdleStatus: "Esta página não permite criar nem modificar pagamentos manualmente.", entryOpeningDescription: "Os dados do pagamento já foram definidos pela aplicação ou pelo link.", entryOpeningState: "A abrir o checkout", entryOpeningStatus: "O gateway está a validar a rota de pagamento autorizada." },
    fr: { entryErrorTitle: "Impossible d’ouvrir la page de paiement", entryInvalidLink: "Le lien de paiement n’est pas valide", entryUnsupportedField: "Le lien contient un paramètre non accepté par la passerelle.", entryDuplicateField: "Le lien contient un paramètre répété.", entryMissingFields: "Le lien ne contient pas toutes les données nécessaires au paiement.", entryNetwork: "Le réseau indiqué dans le lien n’est pas pris en charge.", entryLocalized: "Le contenu localisé du lien n’est pas valide.", entryRead: "Impossible de lire les données du lien.", entryIdleTitle: "Passerelle Solana", entryIdleDescription: "Les paiements sont ouverts depuis une application ou un lien de paiement. Leurs données ne peuvent pas être modifiées ici.", entryIdleState: "Aucun paiement en attente", entryIdleStatus: "Cette page ne permet pas de créer ou de modifier manuellement un paiement.", entryOpeningDescription: "Les données du paiement ont déjà été définies par l’application ou le lien.", entryOpeningState: "Ouverture du paiement", entryOpeningStatus: "La passerelle vérifie la route de paiement autorisée." },
    de: { entryErrorTitle: "Die Zahlungsseite konnte nicht geöffnet werden", entryInvalidLink: "Der Zahlungslink ist ungültig", entryUnsupportedField: "Der Link enthält einen Parameter, den das Gateway nicht unterstützt.", entryDuplicateField: "Der Link enthält einen doppelten Parameter.", entryMissingFields: "Der Link enthält nicht alle für die Zahlung erforderlichen Angaben.", entryNetwork: "Das im Link angegebene Netzwerk wird nicht unterstützt.", entryLocalized: "Der lokalisierte Inhalt des Links ist ungültig.", entryRead: "Die Daten des Links konnten nicht gelesen werden.", entryIdleTitle: "Solana-Gateway", entryIdleDescription: "Zahlungen werden über eine Anwendung oder einen Zahlungslink geöffnet. Ihre Daten können hier nicht geändert werden.", entryIdleState: "Kein ausstehender Bezahlvorgang", entryIdleStatus: "Auf dieser Seite können Zahlungen nicht manuell erstellt oder geändert werden.", entryOpeningDescription: "Die Zahlungsdaten wurden bereits von der Anwendung oder dem Link festgelegt.", entryOpeningState: "Bezahlvorgang wird geöffnet", entryOpeningStatus: "Das Gateway prüft die autorisierte Zahlungsroute." },
    ar: { entryErrorTitle: "تعذر فتح صفحة الدفع", entryInvalidLink: "رابط الدفع غير صالح", entryUnsupportedField: "يحتوي الرابط على معلمة لا تدعمها البوابة.", entryDuplicateField: "يحتوي الرابط على معلمة مكررة.", entryMissingFields: "لا يتضمن الرابط جميع البيانات اللازمة للدفع.", entryNetwork: "الشبكة المحددة في الرابط غير مدعومة.", entryLocalized: "المحتوى المترجم في الرابط غير صالح.", entryRead: "تعذرت قراءة بيانات الرابط.", entryIdleTitle: "بوابة Solana", entryIdleDescription: "تُفتح المدفوعات من تطبيق أو رابط دفع، ولا يمكن تعديل بياناتها هنا.", entryIdleState: "لا توجد عملية دفع معلقة", entryIdleStatus: "لا تسمح هذه الصفحة بإنشاء المدفوعات أو تعديلها يدويًا.", entryOpeningDescription: "تم تحديد بيانات الدفع مسبقًا بواسطة التطبيق أو الرابط.", entryOpeningState: "جارٍ فتح صفحة الدفع", entryOpeningStatus: "تتحقق البوابة من مسار الدفع المصرح به." },
    hi: { entryErrorTitle: "भुगतान पृष्ठ नहीं खोला जा सका", entryInvalidLink: "भुगतान लिंक मान्य नहीं है", entryUnsupportedField: "लिंक में ऐसा पैरामीटर है जिसे गेटवे स्वीकार नहीं करता।", entryDuplicateField: "लिंक में दोहराया गया पैरामीटर है।", entryMissingFields: "लिंक में भुगतान के लिए आवश्यक सभी जानकारी नहीं है।", entryNetwork: "लिंक में दी गई नेटवर्क समर्थित नहीं है।", entryLocalized: "लिंक की स्थानीयकृत सामग्री मान्य नहीं है।", entryRead: "लिंक का डेटा पढ़ा नहीं जा सका।", entryIdleTitle: "Solana गेटवे", entryIdleDescription: "भुगतान किसी ऐप या भुगतान लिंक से खोले जाते हैं। उनका डेटा यहाँ बदला नहीं जा सकता।", entryIdleState: "कोई चेकआउट लंबित नहीं है", entryIdleStatus: "यह पृष्ठ भुगतान को मैन्युअल रूप से बनाने या बदलने की अनुमति नहीं देता।", entryOpeningDescription: "भुगतान का डेटा ऐप या लिंक द्वारा पहले से निर्धारित है।", entryOpeningState: "चेकआउट खोला जा रहा है", entryOpeningStatus: "गेटवे अधिकृत भुगतान मार्ग की पुष्टि कर रहा है।" },
    "zh-CN": { entryErrorTitle: "无法打开付款页面", entryInvalidLink: "付款链接无效", entryUnsupportedField: "链接包含支付网关不支持的参数。", entryDuplicateField: "链接包含重复参数。", entryMissingFields: "链接未包含付款所需的全部信息。", entryNetwork: "链接中指定的网络不受支持。", entryLocalized: "链接中的本地化内容无效。", entryRead: "无法读取链接数据。", entryIdleTitle: "Solana 支付网关", entryIdleDescription: "付款由应用或付款链接打开，此处无法修改付款数据。", entryIdleState: "没有待处理的付款", entryIdleStatus: "此页面不允许手动创建或修改付款。", entryOpeningDescription: "付款数据已由应用或链接预先设置。", entryOpeningState: "正在打开付款页面", entryOpeningStatus: "支付网关正在验证授权付款路线。" },
    ja: { entryErrorTitle: "決済ページを開けませんでした", entryInvalidLink: "決済リンクが無効です", entryUnsupportedField: "リンクにゲートウェイが対応していないパラメータが含まれています。", entryDuplicateField: "リンクに重複したパラメータが含まれています。", entryMissingFields: "リンクに決済に必要な情報がすべて含まれていません。", entryNetwork: "リンクで指定されたネットワークには対応していません。", entryLocalized: "リンクのローカライズ内容が無効です。", entryRead: "リンクのデータを読み取れませんでした。", entryIdleTitle: "Solana ゲートウェイ", entryIdleDescription: "決済はアプリまたは決済リンクから開かれます。ここで内容を変更することはできません。", entryIdleState: "保留中の決済はありません", entryIdleStatus: "このページでは決済を手動で作成または変更できません。", entryOpeningDescription: "決済データはアプリまたはリンクによって事前に設定されています。", entryOpeningState: "決済ページを開いています", entryOpeningStatus: "ゲートウェイが承認済みの決済ルートを確認しています。" },
    ko: { entryErrorTitle: "결제 페이지를 열 수 없습니다", entryInvalidLink: "결제 링크가 올바르지 않습니다", entryUnsupportedField: "링크에 게이트웨이가 지원하지 않는 매개변수가 포함되어 있습니다.", entryDuplicateField: "링크에 중복된 매개변수가 포함되어 있습니다.", entryMissingFields: "링크에 결제에 필요한 정보가 모두 포함되어 있지 않습니다.", entryNetwork: "링크에 지정된 네트워크는 지원되지 않습니다.", entryLocalized: "링크의 현지화 콘텐츠가 올바르지 않습니다.", entryRead: "링크 데이터를 읽을 수 없습니다.", entryIdleTitle: "Solana 게이트웨이", entryIdleDescription: "결제는 앱 또는 결제 링크에서 열립니다. 여기에서는 결제 데이터를 수정할 수 없습니다.", entryIdleState: "대기 중인 결제가 없습니다", entryIdleStatus: "이 페이지에서는 결제를 수동으로 만들거나 수정할 수 없습니다.", entryOpeningDescription: "결제 데이터는 앱 또는 링크에서 미리 설정되었습니다.", entryOpeningState: "결제 페이지를 여는 중", entryOpeningStatus: "게이트웨이가 승인된 결제 경로를 확인하고 있습니다." }
  });
  const keys = Object.freeze(Object.keys(messages.en));
  function normalizeLocale(value) {
    if (typeof value !== "string") return null;
    const query = `?lang=${encodeURIComponent(value)}`;
    return base.resolveLocale({ query, browserLanguages: [] });
  }
  function resolveLocale(query, browserLanguages = []) {
    return base.resolveLocale({ query, browserLanguages });
  }
  function translate(locale, key) {
    const resolved = normalizeLocale(locale) || "en";
    return messages[resolved]?.[key] ?? base.translate(resolved, key);
  }
  function missingKeys(locale) {
    const resolved = normalizeLocale(locale) || "en";
    const dictionary = messages[resolved] ?? {};
    return keys.filter((key) => typeof dictionary[key] !== "string" || dictionary[key].trim() === "");
  }
  function applyDocument(doc, locale) {
    base.applyDocument(doc, locale);
  }
  window.PaymentEntryI18n = Object.freeze({ supportedLocaleCodes: base.supportedLocaleCodes, resolveLocale, normalizeLocale, translate, missingKeys, applyDocument });
})();
