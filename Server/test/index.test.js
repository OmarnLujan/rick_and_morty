const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
   
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      //console.log(response.body)
    
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
      expect(response.body).toHaveProperty("status");
    });

    it("Si hay un error responde con status: 404", async () => {
      await agent.get("/rickandmorty/character/123456").expect(404);
    });
  });
  describe("GET /rickandmorty/login", () => {
    const access ={ access: true}
    it("Retorna un objeto con la propiedad access en true si recibe credenciales correctas", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=prueba@gmail.com&password=123456"
      );
      
      expect(response.body).toEqual(access);
    });
    it("Retorna un objeto con la propiedad access en false si recibe credenciales incorrectos", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=pdffba@gmail.com&password=123dsfr"
      );
      access.access= false
      //console.log(response.body.access)
      expect(response.body).toEqual(access);
    });
  });
  const character1 = { id: "1", name: "Rick" };
    const character2 = { id: "2", name: "Morty" };
  describe("POST /rickandmorty/fav", () => {

    it("Lo que envies por body debe ser devuelto en un arreglo", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character1);
      expect(response.body).toEqual([character1]);
    });
    it("Cuando vuelvas a enviar un elemento debe estar en un array con los anteriores", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character2);
      expect(response.body).toEqual([character1, character2]);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
   
    it("En el caso de que no haya ningun personaje con el ID que envias, sea un arreglo con los elemento previos sin modificar", async () => {
      const response = await agent.delete("/rickandmorty/fav/55");
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
    it("Debes testear que cuando envías un ID válido se elimine correctamente al personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/1");
      expect(response.body).not.toContainEqual(character1);
    });
    it("Debes testear que Fav se que sin elementos", async () => {
      const response = await agent.delete("/rickandmorty/fav/2");
      expect(response.body).not.toContainEqual([]);
      

    });
  });
});
