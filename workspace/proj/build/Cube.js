class Cube extends CGFobject
{
    constructor(scene, side = 1, coords = [0, 1, 0, 1])
    {
        super(scene);
        this.side = side;
        this.square = new Square(scene, side, coords);
        this.initBuffers();
    };

    display()
    {
        var move = this.side / 2;

        // Quad is facing +Z by default

        this.scene.pushMatrix(); // +X
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.scene.translate(0, 0, move);
            this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); // -X
            this.scene.rotate(-Math.PI / 2, 0, 1, 0);
            this.scene.translate(0, 0, move);
            this.square.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix(); // +Y
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.scene.translate(0, 0, move);
            this.square.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix(); // -Y
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.translate(0, 0, move);
            this.square.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix(); // +Z
            this.scene.translate(0, 0, move);
            this.square.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix(); // -Z
            this.scene.rotate(Math.PI, 1, 1, 0);
            this.scene.translate(0, 0, move);
            this.square.display();
        this.scene.popMatrix();
    };
};



class Block extends CGFobject
{
    constructor(scene, sideX, sideY, sideZ, coords = [0, 1, 0, 1])
    {
        super(scene);
        this.cube = new Cube(scene, 1, coords);
        this.sideX = sideX;
        this.sideY = sideY;
        this.sideZ = sideZ;
        this.initBuffers();
    };

    display()
    {
        this.scene.pushMatrix();
            this.scene.scale(this.sideX, this.sideY, this.sideZ);
            this.cube.display();
        this.scene.popMatrix();
    };
};