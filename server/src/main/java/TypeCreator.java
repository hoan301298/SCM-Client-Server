
import java.io.FileWriter;
import java.io.PrintWriter;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.Enumeration;
import java.util.Hashtable;
//Note need to change manually the entity name here
import fi.vamk.scm.server.entities.Location;

public class TypeCreator {
    Hashtable<String, String> attributes = new Hashtable<>();

    public static void main(String[] args) {
        TypeCreator tc = new TypeCreator();
        // Note need to change manually the entity name here
        Class toBeListed = Location.class;
        tc.getAttributes(toBeListed);
        tc.printTypeScriptType(toBeListed);
    }

    public void getAttributes(Class x) {
        Field[] fields = x.getDeclaredFields();
        System.out.printf("%d fields:%n", fields.length);
        for (Field field : fields) {
            attributes.put(field.getName(), field.getType().getSimpleName());
            System.out.printf("%s  %s%n",
                    // Modifier.toString(field.getModifiers()),
                    field.getType().getSimpleName(),
                    field.getName());
        }
    }

    public void printTypeScriptType(Class x) {
        try {
            String name = x.getName().substring(x.getName().lastIndexOf(".") + 1, x.getName().length());
            FileWriter fileWriter = new FileWriter(name + ".ts");
            PrintWriter printWriter = new PrintWriter(fileWriter);
            printWriter.print("export type " + name + "={\n");
            Enumeration<String> e = attributes.keys();
            while (e.hasMoreElements()) {
                String key = e.nextElement();
                if (!key.equals("serialVersionUID")) {
                    printWriter.print(key + ":" + attributes.get(key).toLowerCase() + ",\n");
                }
            }
            printWriter.printf("}");
            printWriter.close();
        } catch (Exception ex) {
            System.out.println("Error " + ex);
        }
    }
}