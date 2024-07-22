import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const HoverCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    '& .details': {
      display: 'block',
    },
  },
}));

const Details = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  zIndex: 1,
  overflow: 'auto',
}));

const highlightText = (text, query) => {
  if (!query) return text;

  const parts = text.toString().split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const VehicleCard = ({ vehicle, searchQuery }) => {
  return (
    <Box sx={{ minWidth: 275, margin: 2 }}>
      <HoverCard variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Vehicle Information
          </Typography>
          <Typography variant="h5" component="div">
            {highlightText(vehicle.VehicleNo, searchQuery)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Vehicle ID: {highlightText(vehicle.VehicleId, searchQuery)}
          </Typography>
          <Typography variant="body2">
            Client ID: {highlightText(vehicle.ClientID, searchQuery)}
            <br />
            Unit ID: {highlightText(vehicle.UnitID, searchQuery)}
            <br />
            {/* Basic info shown initially */}
          </Typography>
        </CardContent>
        <Details className="details">
          <Typography variant="body2">
            <strong>Vehicle Details:</strong>
            <br />
            <strong>Vehicle ID:</strong> {highlightText(vehicle.VehicleId, searchQuery)}
            <br />
            <strong>Client ID:</strong> {highlightText(vehicle.ClientID, searchQuery)}
            <br />
            <strong>Unit ID:</strong> {highlightText(vehicle.UnitID, searchQuery)}
            <br />
            <strong>Solution Type ID:</strong> {highlightText(vehicle.SolutionTypeID, searchQuery)}
            <br />
            <strong>Vehicle Type ID:</strong> {highlightText(vehicle.VehicleTypeID, searchQuery)}
            <br />
            <strong>Vehicle No:</strong> {highlightText(vehicle.VehicleNo, searchQuery)}
            <br />
            <strong>Vehicle Plate No:</strong> {highlightText(vehicle.vehicleplateno, searchQuery)}
            <br />
            <strong>Start Odometer:</strong> {highlightText(vehicle.StartOdometer, searchQuery)}
            <br />
            <strong>Vehicle Model:</strong> {highlightText(vehicle.VehicleModel, searchQuery)}
            <br />
            <strong>Vehicle Make:</strong> {highlightText(vehicle.VehicleMake, searchQuery)}
            <br />
            <strong>Driver ID:</strong> {highlightText(vehicle.DriverId ?? 'N/A', searchQuery)}
            <br />
            <strong>Co-Driver ID:</strong> {highlightText(vehicle.CoDriverId ?? 'N/A', searchQuery)}
            <br />
            <strong>Driver Vehicle Ass ID:</strong> {highlightText(vehicle.DriverVehicleAssId ?? 'N/A', searchQuery)}
          </Typography>
        </Details>
      </HoverCard>
    </Box>
  );
};

export default VehicleCard;
