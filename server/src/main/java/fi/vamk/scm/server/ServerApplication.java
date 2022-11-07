package fi.vamk.scm.server;

import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import fi.vamk.scm.server.entities.Location;
import fi.vamk.scm.server.repositories.LocationRepository;

@SpringBootApplication
public class ServerApplication {
	@Autowired
	private LocationRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public void initData() {
		Location l = new Location();
		Iterable<Location> locations = repository.findAll();
		// check the size of location and if not any add one
		if (StreamSupport.stream(locations.spliterator(), false).count() < 1) {
			l.setName("Vaasa");
			l.setLon(21.61577);
			l.setLat(63.096);
			Location l2 = repository.save(l);
			System.out.println(l2.getId() + " " + l2.getName());
		}
		// Iterable<Location> locations = repository.findAll();
		// for (Pet pet : pets) {
		// System.out.println(pet.getId() + " " + pet.getName());
		// }
	}

}
