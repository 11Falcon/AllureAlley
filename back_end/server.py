from flask import Flask, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app) 



@app.route('/get_message', methods=['GET'])
def get_message():
    try:
        completion = "test"
        client = OpenAI(
        api_key="Your API Key"
        )

        completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Vous êtes un assistant utile pour AllureAlley, une entreprise de mode et de décoration d'intérieur. Votre objectif est d'aider à créer une nouvelle structure de catégories unifiée pour leur prochain site d'e-commerce. Utilisez toutes les informations du catalogue pour générer une hiérarchie pertinente et multi-niveaux pour les catégories de produits. Assurez-vous que la nouvelle structure de catégories pour l'e-commerce est conviviale et facilite la navigation sur le site.\n\nVeillez à utiliser tous les produits existants dans le catalogue, sans ajouter de nouveaux produits.\n le catalogue est: Catalogue Été\n\n1. Prêt-à-porter\n\n1.1 Femmes\n\n1.1.1 Robes\n\n1.1.2 Maillots de bain\n\n1.1.3 Accessoires d'été\n\n1.2 Hommes\n\n1.2.1 Shorts\n\n1.2.2 T-Shirts\n\n1.2.3 Accessoires d'été\n\n1.3 Enfants\n\n1.3.1 Filles\n\n1.3.2 Garçons\n\n2. Maison & Déco\n\n2.1 Mobilier de jardin\n\n2.1.1 Chaises\n\n2.1.2 Tables\n\n2.2 Barbecue & Accessoires\n\n2.3 Décoration extérieure\n\nCatalogue Enfants\n\n1. Vêtements\n\n1.1 Filles\n\n1.1.1 Robes\n\n1.1.2 Tops\n\n1.1.3 Chaussures\n\n1.2 Garçons\n\n1.2.1 Shorts\n\n1.2.2 T-Shirts\n\n1.2.3 Chaussures\n\n2. Jouets\n\n2.1 Par âge\n\n2.1.1 0-2 ans\n\n2.1.2 3-5 ans\n\n2.1.3 6-8 ans\n\n2.1.4 9-12 ans\n\n2.2 Par type\n\n2.2.1 Éducatifs\n\n2.2.2 Action\n\n2.2.3 Créativité\n\nCatalogue Noël\n\n1. Cadeaux\n\n1.1 Pour elle\n\n1.1.1 Bijoux\n\n1.1.2 Beauté\n\n1.1.3 Mode\n\n1.2 Pour lui\n\n1.2.1 Tech\n\n1.2.2 Mode\n\n1.2.3 Accessoires\n\n1.3 Pour enfants\n\n1.3.1 Jouets\n\n1.3.2 Vêtements\n\n2. Décoration de Noël\n\n2.1 Décorations d'intérieur\n\n2.1.1 Ornements\n\n2.1.2 Lumières\n\n2.2 Décorations d'extérieur\n\n2.2.1 Lumières\n\n2.2.2 Statues\n"},
            {"role": "user","content": "Générez maintenant le nouveau référentiel de catégories pour le site d'e-commerce d'AllureAlley en utilisant les informations des catalogues été, enfant et Noël."}
        ]
        )
        return jsonify({'message':completion.choices[0].message.content})
    except Exception as e:
        return jsonify(error=str(e))

if __name__ == '__main__':
    app.run(debug=True)

