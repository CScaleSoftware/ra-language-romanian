module.exports = {
    ra: {
        action: {
            add_filter: 'Adaugă un filtru',
            add: 'Adaugă',
            back: 'Înapoi',
            bulk_actions: '1 element selectat |||| %{smart_count} elemente selectate',
            cancel: 'Anulează',
            clear_input_value: 'Șterge valoarea',
            clone: 'Clonează',
            confirm: 'Confirmă',
            create: 'Creează',
            delete: 'Șterge',
            edit: 'Editează',
            export: 'Exportă',
            list: 'Listă',
            refresh: 'Actualizează',
            remove_filter: 'Elimină acest filtru',
            remove: 'Elimină',
            save: 'Salvează',
            search: 'Caută',
            show: 'Afișează',
            sort: 'Sortează',
            undo: 'Anulează',
            expand: 'Extinde',
            close: 'Închide',
            open_menu: 'Deschide meniul',
            close_menu: 'Închide meniul',
        },
        boolean: {
            true: 'Da',
            false: 'Nu',
            null: 'Nedefinit',
        },
        page: {
            create: 'Creează %{name}',
            dashboard: 'Pagina principala',
            edit: '%{name} #%{id}',
            error: 'Ceva n-a mers cum trebuie',
            list: 'Lista de %{name}',
            loading: 'Se încarcă',
            not_found: 'Pagina nu există',
            show: '%{name} #%{id}',
            empty: 'Nicio înregistrare de tip %{name}.',
            invite: 'Doriți să creați una?',
        },
        input: {
            file: {
                upload_several:
                  'Trageți aici fișierele de încărcat sau faceți clic pentru a le selecta.',
                upload_single: 'Trageți aici fișierul de încărcat sau faceți clic pentru a selecta unul.',
            },
            image: {
                upload_several:
                    'Trageți aici imaginile de încărcat sau faceți clic pentru a le selecta.',
                upload_single:
                    'Trageți aici imaginea de încărcat sau faceți clic pentru a selecta una.',
            },
            references: {
                all_missing: 'Nu au fost găsite referințe',
                many_missing:
                    'Cel puțin una dintre referințele asociate nu mai este disponibilă.',
                single_missing:
                    'Referința asociată nu mai este disponibilă',
            },
            password: {
                toggle_visible: 'Ascunde parola',
                toggle_hidden: 'Arată parola',
            },
        },
        message: {
            about: 'Despre',
            are_you_sure: 'Sunteți sigur?',
            bulk_delete_content:
                'Sunteți sigur că doriți să ștergeți acest element (%{name})? |||| Sunteți sigur că doriți să ștergeți aceste elemente (%{smart_count})?',
            bulk_delete_title:
                'Șterge %{name} |||| Șterge %{smart_count} %{name}',
            delete_content: 'Sunteți sigur că doriți să ștergeți acest element?',
            delete_title: 'Șterge %{name} #%{id}',
            details: 'Detalii',
            error:
                'A avut loc o eroare și cererea dumneavoastră n-a putut fi finalizată',
            invalid_form: 'Formularul nu este valid. Verificați erorile',
            loading: 'Pagina se încarcă și va fi disponibilă imediat',
            no: 'Nu',
            not_found:
                'Adresa URL introdusă este incorectă sau ați urmat un link greșit.',
            yes: 'Da',
            unsaved_changes:
                "Există modificări nesalvate. Sunteți sigur că doriți să la pierdeți?",
        },
        navigation: {
            no_results: 'Niciun rezultat',
            no_more_results:
                'Pagina %{page} nu există. încercați pagina precedentă.',
            page_out_of_boundaries: 'Pagina %{page} nu există',
            page_out_from_end: 'Pagina următoare nu există',
            page_out_from_begin: 'Pagina anterioară nu există',
            page_range_info: '%{offsetBegin}-%{offsetEnd} din %{total}',
            page_rows_per_page: 'Rânduri pe pagină:',
            next: 'Următoarea',
            prev: 'Precedenta',
        },
        auth: {
            auth_check_error: 'Pentru a continua trebuie să vă autentificați',
            user_menu: 'Profil',
            username: 'Nume utilizator',
            password: 'Parola',
            sign_in: 'Autentificare',
            sign_in_error: 'Autentificarea a eșuat, încercați din nou',
            logout: 'Deconectați-vă',
        },
        notification: {
            updated: 'Element actualizat |||| %{smart_count} elemente actualizate',
            created: 'Elementul a fost creat',
            deleted: 'Elementul a fost șters |||| %{smart_count} elemente au fost șterse',
            bad_item: 'Element incorect',
            item_doesnt_exist: 'Elementul nu există',
            http_error: 'Eroare de comunicare cu serverul',
            data_provider_error:
                'Eroare a componentului dataProvider. Verificați consola pentru detalii.',
            i18n_error:
                'Traducerea pentru limba solicitată nu a putut fi încărcată',
            canceled: 'Acțiune anulată',
            logged_out: 'Sesiunea dumneavoastră s-a încheiat. Vă rugăm să vă reconectați.',
        },
        validation: {
            required: 'Completarea câmpului este obligatorie',
            minLength: 'Minim %{min} caractere',
            maxLength: 'Maxim %{max} caractere',
            minValue: 'Valoarea minimă este %{min}',
            maxValue: 'Valoarea maximă este %{max}',
            number: 'Trebuie să fie un număr',
            email: 'Trebuie să fie o adresă de poștă electronică',
            oneOf: 'Trebuie să fie una dintre următoarele valori: %{options}',
            regex: 'Trebuie să se satisfacă următorul șablon (regexp): %{pattern}',
        },
    },
};
