package fi.vamk.scm.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.vamk.scm.server.entities.Location;
import fi.vamk.scm.server.repositories.LocationRepository;

@RestController
@RequestMapping("/api/location")
public class LocationController {
	@Autowired
	LocationRepository repository;

	@GetMapping
	@CrossOrigin(origins = "http://localhost:3000")
	public Iterable<Location> readAll() {
		return repository.findAll();
	}
}
