package fi.vamk.scm.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public Iterable<Location> readAll() {
		return repository.findAll();
	}

	@PostMapping
	public ResponseEntity<?> save(@RequestBody Location item) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(item));
	}
}
